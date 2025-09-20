const questions = [
    {
        name: "Arrays ",
        percentage: "25%",
        questions: [
            {
                title: "String Compression",
                example: "Input: aabbbbeeeeffggg → Output: a2b4e4f2g3"
            },
            {
                title: "Spiral Matrix Traversal",
                example: "Input: 3×3 matrix → Output: 1 2 3 6 9 8 7 4 5"
            },
            {
                title: "Count Frequency of Integers in Array",
                example: "Input: [1,2,3,3,4,1,4,5,1,2] → Output: 1:3,2:2,3:2,4:2,5:1"
            },
            {
                title: "Maximum Marks per Semester",
                example: "Input: [50 60 70],[90 98 76 67],[89 76] → Output: 70,98,89"
            },
            {
                title: "Minimum Discount Product Finder",
                example: "Input: mobile,10000,20;shoe,5000,10 → Output: shoe"
            },
            {
                title: "Dealership Tyre Calculation",
                example: "Input: 3;4 2;4 0;1 2 → Output: 20,16,8"
            },
            {
                title: "Missing Number in Array",
                example: "Input: [1,2,4,5,6] → Output: 3"
            },
            {
                title: "Find Duplicates in an Array",
                example: "Input: [4,3,2,7,8,2,3,1] → Output: 2,3"
            }, 
            {
                title: "Rotate an Array by K Steps",
                example: "Input: [1,2,3,4,5], k=2 → Output: [4,5,1,2,3]"
            },
            {
                title: "Merge Two Sorted Arrays",
                example: "Input: [1,3,5],[2,4,6] → Output: [1,2,3,4,5,6]"
            },
            {
                title: "Intersection of Two Arrays",
                example: "Input: [1,2,2,1],[2,2] → Output: [2]"
            },
            {
                title: "Majority Element (>n/2 times)",
                example: "Input: [2,2,1,1,1,2,2] → Output: 2"
            },
            {
                title: "Largest Sum Contiguous Subarray (Kadane's Algorithm)",
                example: "Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6"
            },
            {
                title: "Sort 0,1,2 (Dutch National Flag)",
                example: "Input: [2,0,2,1,1,0] → Output: [0,0,1,1,2,2]"
            },
            {
                title: "Kth Largest Element",
                example: "Input: [3,2,1,5,6,4],k=2 → Output: 5"
            },
            {
                title: "Array of Building Heights – Count Visible Buildings",
                example: "Input: [7,4,8,2,9] → Output: 3"
            },
            {
                title: "Prefix Sum Array Construction",
                example: "Input: [1,2,3,4] → Output: [1,3,6,10]"
            },
            {
                title: "Subarray with Given Sum",
                example: "Input: [1,2,3,7,5],Sum=12 → Output: 2-4"
            },
            {
                title: "Minimum Cost Insertion Problem",
                example: "Cost = max-min, Custom arrays insertion → Output: minimum cost"
            },
            {
                title: "Longest Increasing Subsequence",
                example: "Input: [10,9,2,5,3,7,101,18] → Output: 4"
            },
            {
                title: "Maximum Product Subarray",
                example: "Input: [2,3,-2,4] → Output: 6"
            },
            {
                title: "Pair with Target Sum",
                example: "Input: [2,7,11,15],Target=9 → Output: (2,7)"
            },
            {
                title: "Rearrange Positives and Negatives Alternately",
                example: "Input: [1,-2,3,-4] → Output: [1,-2,3,-4]"
            },
            {
                title: "Minimum Swaps to Sort Array",
                example: "Input: [4,3,2,1] → Output: 2"
            },
            {
                title: "Find Peak Element",
                example: "Input: [1,2,3,1] → Output: 2"
            }
        ]
    },
    {
        name: "Strings",
        percentage: "20%",
        questions: [
            {
                title: "Palindrome String Check",
                example: "Input: \"racecar\" → Output: True"
            },
            {
                title: "String Rotation Check",
                example: "Input: \"ABCD\",\"CDAB\" → Output: True"
            },
            {
                title: "First Non-Repeated Character",
                example: "Input: \"swiss\" → Output: w"
            },
            {
                title: "Move Hash to Front",
                example: "Input: \"Move#Hash#to#Front\" → Output: \"###MoveHashtoFront\""
            },
            {
                title: "Count Non-Repeating Characters",
                example: "Input: \"programming\" → Output: 5"
            },
            {
                title: "Minimum Left Rotations to Match String",
                example: "Input: \"ABCD\",\"BCDA\" → Output: 1"
            },
            {
                title: "Longest Substring Without Repeating Characters",
                example: "Input: \"abcabcbb\" → Output: 3"
            },
            {
                title: "Reverse Words in a Sentence",
                example: "Input: \"the sky is blue\" → Output: \"blue is sky the\""
            },
            {
                title: "Check if Two Strings Are Anagrams",
                example: "Input: \"listen\",\"silent\" → Output: True"
            },
            {
                title: "Find All Substrings of a String",
                example: "Input: \"abc\" → Output: a,b,c,ab,bc,abc"
            },
            {
                title: "Substring Search (Implement strStr)",
                example: "Input: \"hello\",\"ll\" → Output: 2"
            },
            {
                title: "Count Vowels and Consonants",
                example: "Input: \"hello\" → Output: 2 vowels,3 consonants"
            },
            {
                title: "Remove Adjacent Duplicates",
                example: "Input: \"abbaca\" → Output: \"ca\""
            },
            {
                title: "Smallest Window Containing All Characters of Another String",
                example: "Input: \"ADOBECODEBANC\",\"ABC\" → Output: \"BANC\""
            },
            {
                title: "Check Character Match at Indices",
                example: "Input: \"aba\" → Output: 1"
            }
        ]
    },
    {
        name: "Hashing / HashMap / Frequency counting",
        percentage: "10%",
        questions: [
            {
                title: "Count Distinct Elements in an Array",
                example: "Input: [1,2,2,3] → Output: 3"
            },
            {
                title: "Sum of Distinct Elements in an Array",
                example: "Input: [1,2,2,3] → Output: 6"
            },
            {
                title: "Subarray with Zero Sum",
                example: "Input: [4,2,-3,1,6] → Output: True"
            },
            {
                title: "Longest Consecutive Sequence",
                example: "Input: [100,4,200,1,3,2] → Output: 4"
            },
            {
                title: "Two Sum Using HashMap",
                example: "Input: [2,7,11,15],9 → Output: (0,1)"
            },
            {
                title: "Find All Pairs with Given Difference",
                example: "Input: [1,5,3,4,2],diff=2 → Output: (1,3),(3,5) etc."
            },
            {
                title: "Count Elements Appearing Exactly Twice",
                example: "Input: [1,2,3,2,1,1] → Output: 2"
            },
            {
                title: "Group Anagrams Together",
                example: "Input: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] → Output: grouped lists"
            },
            {
                title: "Count Distinct Permutations of a String",
                example: "Input: \"aab\" → Output: 3"
            },
            {
                title: "Frequency of Each Word in a Sentence",
                example: "Input: \"this is is a test\" → Output: this:1,is:2,a:1,test:1"
            }
        ]
    },
    {
        name: "Mathematics / Number Theory",
        percentage: "10%",
        questions: [
            {
                title: "Find Factors of a Number",
                example: "Input: 54 → Output: 1,2,3,6,9,18,27,54"
            },
            {
                title: "Prime Number Check",
                example: "Input: 29 → Output: True"
            },
            {
                title: "Find Nth Prime Number",
                example: "Input: 5 → Output: 11"
            },
            {
                title: "Count Composite Numbers in an Array",
                example: "Input: [4,5,6,7,8] → Output: 3"
            },
            {
                title: "Sum of All Divisors",
                example: "Input: 6 → Output: 12"
            },
            {
                title: "GCD and LCM of Two Numbers",
                example: "Input: 4,6 → Output: GCD=2,LCM=12"
            },
            {
                title: "Modular Exponentiation",
                example: "Input: 2^5 mod 13 → Output: 6"
            },
            {
                title: "Check for Armstrong Number",
                example: "Input: 153 → Output: True"
            },
            {
                title: "Factorial of a Number",
                example: "Input: 5 → Output: 120"
            },
            {
                title: "Fibonacci Sequence Generation",
                example: "Input: 5 → Output: 0 1 1 2 3"
            },
            {
                title: "Evaluate Polynomial Expression",
                example: "Input: a=2,b=3 → Output: 59"
            },
            {
                title: "Abc Weighted Sum Calculation",
                example: "Input: abc → Output: weighted sum 1*26+2*25+3*24"
            },
            {
                title: "Calculate Initial Velocity",
                example: "Input: Physics values → Output: initial velocity"
            },
            {
                title: "Projectile Motion Calculation",
                example: "Input: velocity=10,angle=45 → Output: range or height"
            },
            {
                title: "Time, Distance, Speed Conversion",
                example: "Input: distance=100,time=2 → Output: 50"
            }
        ]
    },
    {
        name: "Matrix Problems",
        percentage: "8%",
        questions: [
            {
                title: "Matrix Identity Check",
                example: "Input: Identity matrix → Output: True"
            },
            {
                title: "Rotate Matrix by 90°",
                example: "Input: [[1,2,3],[4,5,6],[7,8,9]] → Output: [[7,4,1],[8,5,2],[9,6,3]]"
            },
            {
                title: "Transpose a Matrix",
                example: "Input: [[1,2,3],[4,5,6]] → Output: [[1,4],[2,5],[3,6]]"
            },
            {
                title: "Search in a Sorted 2D Matrix",
                example: "Input: matrix, target=3 → Output: True"
            },
            {
                title: "Set Matrix Zeroes if Element is Zero",
                example: "Input: [[1,0],[2,3]] → Output: [[0,0],[2,0]]"
            },
            {
                title: "Find Path in Grid (DFS Basics)",
                example: "Input: grid with obstacles → Output: path exists"
            },
            {
                title: "Count Islands in a Matrix",
                example: "Input: grid with 1s and 0s → Output: number of islands"
            }
        ]
    },
    {
        name: "Linked List",
        percentage: "7%",
        questions: [
            {
                title: "Reverse a Linked List",
                example: "Input: 1->2->3->4->5 → Output: 5->4->3->2->1"
            },
            {
                title: "Detect Cycle in Linked List",
                example: "Input: linked list with cycle → Output: True"
            },
            {
                title: "Merge Two Sorted Linked Lists",
                example: "Input: 1->2->4 and 1->3->4 → Output: 1->1->2->3->4->4"
            },
            {
                title: "Remove Nth Node from End of List",
                example: "Input: 1->2->3->4->5,n=2 → Output: 1->2->3->5"
            },
            {
                title: "Check if Linked List is Palindrome",
                example: "Input: 1->2->2->1 → Output: True"
            }
        ]
    },
    {
        name: "Stacks & Queues",
        percentage: "5%",
        questions: [
            {
                title: "Balanced Parentheses Check",
                example: "Input: \"{[()]}\" → Output: True"
            },
            {
                title: "Next Greater Element",
                example: "Input: [4,5,2,10,8] → Output: [5,10,10,-1,-1]"
            },
            {
                title: "Evaluate Postfix Expression",
                example: "Input: \"231*+9-\" → Output: -4"
            },
            {
                title: "Min Stack (Get Min in O(1))",
                example: "sequence of push/pop → Output: min value"
            },
            {
                title: "Circular Queue Simulation",
                example: "Input: enqueue/dequeue ops → Output: final queue"
            }
        ]
    },
    {
        name: "Recursion & Backtracking",
        percentage: "5%",
        questions: [
            {
                title: "Generate All Permutations of a String",
                example: "Input: \"abc\" → Output: abc,acb,bac,bca,cab,cba"
            },
            {
                title: "Generate All Subsets of an Array",
                example: "Input: [1,2,3] → Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
            },
            {
                title: "Rat in a Maze",
                example: "Input: grid → Output: all possible paths"
            },
            {
                title: "Tower of Hanoi",
                example: "Input: 3 disks → Output: moves"
            },
            {
                title: "Sum of Digits Using Recursion",
                example: "Input: 1234 → Output: 10"
            },
            {
                title: "Power Function Using Recursion",
                example: "Input: 2,5 → Output: 32"
            }
        ]
    },
    {
        name: "Searching & Sorting",
        percentage: "5%",
        questions: [
            {
                title: "Binary Search Implementation",
                example: "Input: [1,2,3,4,5],target=4 → Output: 3"
            },
            {
                title: "Merge Sort Implementation",
                example: "Input: [5,2,3,1] → Output: [1,2,3,5]"
            },
            {
                title: "Quick Sort Implementation",
                example: "Input: [10,7,8,9,1,5] → Output: [1,5,7,8,9,10]"
            },
            {
                title: "Search Insert Position",
                example: "Input: [1,3,5,6],target=5 → Output: 2"
            },
            {
                title: "Find Single Element in Sorted Array",
                example: "Input: [1,1,2,3,3,4,4,8,8] → Output: 2"
            }
        ]
    },
    {
        name: "Dynamic Programming",
        percentage: "3%",
        questions: [
            {
                title: "Longest Common Subsequence",
                example: "Input: \"abcde\",\"ace\" → Output: 3"
            },
            {
                title: "Minimum Steps to Reach End of Array (Jump Game)",
                example: "Input: [2,3,1,1,4] → Output: 2"
            },
            {
                title: "Coin Change (Minimum Coins)",
                example: "Input: coins=[1,2,5],amount=11 → Output: 3"
            }
        ]
    },
    {
        name: "Bit Manipulation",
        percentage: "2%",
        questions: [
            {
                title: "Find Unique Element Using XOR",
                example: "Input: [2,2,1] → Output: 1"
            },
            {
                title: "Count Set Bits in an Integer",
                example: "Input: 9 → Output: 2"
            }
        ]
    },
    {
        name: "Graphs / Trees",
        percentage: "2%",
        questions: [
            {
                title: "BFS Traversal of a Graph",
                example: "Input: adjacency list starting node=2 → Output: BFS order"
            },
            {
                title: "DFS Traversal of a Graph or Tree",
                example: "Input: adjacency list starting node=1 → Output: DFS order"
            }
        ]
    }
];
