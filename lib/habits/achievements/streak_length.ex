defmodule Habits.Achievements.StreakLength do
  @moduledoc false

  use Habits.Achievements.Achievement

  alias HabitsWeb.Habit

  defp value_for(%Habit{} = habit) do
    Habit.get_longest_streak(habit)
  end
end
