/*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######*/

for (let triangle = "#"; triangle.length <= 7; triangle+="#" ) {
    console.log(triangle)
}
