# http://elixir-lang.org/getting-started/case-cond-and-if.html

defmodule CaseCondIf do

  def basicCase(x) do
  	case 10 do
  		^x -> "Won't match"
  		_ -> "Will match"
  	end
  end

  def basicCond do
  	cond do
  		2 + 2 == 5 ->
  		  "This will not be true"
  		2 * 2 == 3 ->
  		  "Nor this"
  		1 + 1 == 2 ->
  		  "But this will"	
  	end
  end

end

IO.puts CaseCondIf.basicCase(1) # Will match
IO.puts CaseCondIf.basicCond