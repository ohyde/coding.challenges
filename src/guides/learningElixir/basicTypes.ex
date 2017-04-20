# Basic Arithmetic

IO.puts div(10, 2) # 5
IO.puts div 10, 2 # 5
IO.puts rem 10, 3 # modulo?
IO.puts round(3.58) # 4

# functions are referred to by the name (div) and the arity (number of arguments)
# eg div/2

IO.puts is_boolean(true) # true

# Atoms are constants where their name is their own value

IO.puts :hello # hello
IO.puts is_atom false # true
IO.puts is_boolean :false # true

# Strings

IO.puts "hello #{:world}" # hello world [string interpolation]

# Anonymous functions can be created inline and are delimited by the keywords fn and end:
# Note a dot (.) between the variable and parentheses is required to invoke an anonymous function. The dot ensures there is no ambiguity between calling an anonymous function named add and a named function add/2. In this sense, Elixir makes a clear distinction between anonymous functions and named functions. We will explore those differences in Chapter 8.
add = fn a, b -> a + b end
IO.puts add.(1,3) # 4
IO.puts is_function(add) # true

# Linked Lists
IO.puts length [1, 2, true, 3] # 4

list = [1, 2, 3]
IO.puts hd(list)
IO.puts tl(list)
