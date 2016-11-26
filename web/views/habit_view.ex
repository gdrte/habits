defmodule Habits.HabitView do
  use Habits.Web, :view

  import Ecto.Query, only: [from: 2]

  def all_habits_json do
    Poison.encode!([
      %{
        id: 1,
        checkInId: 1,
        name: "Do a thing",
        streak: 12
      },
      %{
        id: 2,
        checkInId: nil,
        name: "Do another thing",
        streak: 0
      },
      %{
        id: 3,
        checkInId: nil,
        name: "Do more things",
        streak: 0
      }
    ])
  end

  def check_in_id_for_habit(habit_id, nil) do
    Habits.Repo.one(
      from c in Habits.CheckIn,
      where: c.habit_id == ^habit_id,
      where: c.date == ^Timex.local,
      select: c.id
    )
  end

  def check_in_id_for_habit(habit_id, date) do
    Habits.Repo.one(
      from c in Habits.CheckIn,
      where: c.habit_id == ^habit_id,
      where: c.date == ^date,
      select: c.id
    )
  end

  def current_date(date) do
    {:ok, string} = date
    |> Timex.to_date
    |> Timex.format("%b %-d", :strftime)
    string
  end

  def date_string(date) do
    {:ok, string} = date
    |> Timex.to_date
    |> Timex.format("%F", :strftime)
    string
  end

  def previous_date_path(date) do
    %{year: year, month: month, day: day} =
      date
      |> Timex.to_date
      |> Timex.shift(days: -1)

    "/#{year}/#{month}/#{day}"
  end

  def next_date_path(date) do
    %{year: year, month: month, day: day} =
      date
      |> Timex.to_date
      |> Timex.shift(days: 1)

    "/#{year}/#{month}/#{day}"
  end

  def show_next_page?(date) do
    date
    |> Timex.to_date
    |> Timex.compare(Timex.to_date(today_tuple))
    |> negative?
  end

  defp today_tuple do
    date = Timex.local
    {date.year, date.month, date.day}
  end

  defp negative?(number) do
    number < 0
  end
end
