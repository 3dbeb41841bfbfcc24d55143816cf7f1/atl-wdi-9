
def multiple_by_3(num)
	if num%3 == 0 
		return true 
	end
	false 
end

def multiple_by_5(num)
	if num%5 == 0 
		return true 
	end
	false 
end

def count_to_whatever (max) 
	for i in (1..max)
		if multiple_by_3(i) && multiple_by_5(i)
			print "Fizzbuzz!"
		elsif multiple_by_3(i)
			print "Fizz!"
		elsif multiple_by_5(i)
			print "Buzz!"
		else
			print i 
		end
		puts ""
	end
end

print "How high do you want to go to? "
max = gets.chomp
count_to_whatever(max.to_i)
