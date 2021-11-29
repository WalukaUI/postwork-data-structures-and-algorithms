def find_shortest_string(arr)
  # type your code in here
  newA= arr[0]
  arr.each do |string|
    if string.size < newA.length
      newA=string
    end
    newA
  end
  newA
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  puts "Expecting: 'fl'"
  puts "=>", find_shortest_string(['fl', 'juniper', 'lily', 'dadelion'])

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
# And a written explanation of your solution
