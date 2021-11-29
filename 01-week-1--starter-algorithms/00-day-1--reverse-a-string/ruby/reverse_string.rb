def reverse_string(str)
  # type your code in here
  string=[]
 
  i=str.length-1

  while i >= 0
    string.push(str[i])
    i -= 1
  end

  string.join
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

# And a written explanation of your solution

#split the word 
#push it to an array
#revrese array
#join as a string and retrn