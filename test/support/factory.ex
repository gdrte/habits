defmodule Habits.Factory do
  use ExMachina.Ecto, repo: Habits.Repo

  def account_factory do
    %Habits.Account{
      email: sequence(:email, &"email-#{&1}@example.com"),
      encrypted_password: "password"
    }
  end

  def habit_factory do
    %Habits.Habit{
      name: sequence(:name, &"Eat #{&1} Fish"),
      account: build(:account)
    }
  end

  def check_in_factory do
    %Habits.CheckIn{
      date: today_tuple,
      habit: build(:habit),
    }
  end

  defp today_tuple do
    date = Timex.DateTime.local
    {date.year, date.month, date.day}
  end
end