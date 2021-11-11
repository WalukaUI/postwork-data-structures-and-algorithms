def fibonacci(num)
  # type your code in here

  $a=0
  $b=1
  $result

  return $a if num === 0
  return $b if num === 1
  
  (num-1).times do
    $result=$a+$b
    $a=$b
    $b=$result
  end
  
  $result
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!

end

# Please add your pseudocode to this file
# And a written explanation of your solution
