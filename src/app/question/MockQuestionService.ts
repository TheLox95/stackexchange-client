import { Observable } from "rxjs/Observable";
import { Question } from "./Question";
import { Comment } from "../question/comment/Comment";
import { Owner } from "../owner/Owner";
import { Answer } from "../answers/Answer";
import QuestionServiceInterface from "./QuestionServiceInterface";

export class MockQuestionService implements QuestionServiceInterface {
  get(id) {
    return new Observable<Question[]>(observer => {
      const owner = new Owner(
        2907819,
        "registered",
        "https://i.stack.imgur.com/7ZJOa.gif?s=128&g=1",
        "Ni.",
        "https://stackoverflow.com/users/2907819/ni"
      );

      const comment1 = new Comment(
        owner,
        false,
        2,
        1518716927,
        48813300,
        84630260,
        "Well, unless you have a very bad version of python, I&#39;m sure &quot;B&quot; is equal to &quot;B&quot;. You should assume there is a bug in your code and put more effort into finding it."
      );
      const comment2 = new Comment(
        owner,
        false,
        2,
        1518716972,
        48813300,
        84630283,
        'Possible duplicate of <a href="https://stackoverflow.com/questions/34827263/python-readline-is-not-reading-a-line-with-single-space">Python readline() is not reading a line with single space</a>'
      );
      const answer = new Answer(
        owner,
        true,
        3,
        1518716844,
        1518716844,
        48813371,
        48813300,
        "<p>You're including the newline in the string you read from the file. You want </p>\n\n<p><code>x = file.readline().strip()</code></p>\n",
        [comment2]
      );
      const question: Question = new Question(
        48813300,
        '<p>I am making a little program in python that is supposed to read the questions from a text file in the format of give question, answers ABCD and should check if the user put in the correct answer. Below is the code I wrote for doing that</p>\n\n<pre><code>import time\n\nfile = open("Questions.txt", "r")\n\n\ndef askQuestion():\n    print(file.readline())\n    for counter in range(4):\n        print(file.readline())\n    x = file.readline()\n    userAnswer = input("Please input a letter that corresponds to the correct answer")\n    print("The answer is", userAnswer)\n    print("The X is", x)\n    if userAnswer.upper() == x:\n        print("You got that right")\n\n\nfor counter in range(10):\n    time.sleep(1)\n    askQuestion()\n\n\nfile.close()\n</code></pre>\n\n<p>and here is a text file with the questions and answers, in advance I just want to say that I am not sure if this is how I should format the text in the file so I am sorry if it isn\'t the right way to do it on stack overflow.</p>\n\n<pre><code>1) What was the name of the atomic bomb dropped on Hiroshima in 1945?\nA)Fat Man\nB)Little Boy\nC)Annihilator\nD)Heisenberg\nB\n2)How many stars is there on the American Flag?\nA)48\nB)47\nC)50\nD)52\nC\n3)How many countries is there in Europe?\nA)52\nB)38\nC)12\nD)28\nD\n4)What is the capital city of Poland?\nA)Warsaw\nB)Krakow\nC)Kijew\nD)Moscow\nA\n5)What are the colors on the polish flag?\nA)RED-WHITE\nB)WHITE-RED\nC)WHITE-GREEN\nD)YELLOW-BLUE\nB\n6)What does 2+2*2 evaluate to?\nA)8\nB)10\nC)6\nD)20\nC\n7)What year do we have?\nA)3920\nB)120\nC)20018\nD)2018\nD\n8)When did WW2 end?\nA)1945\nB)1919\nC)1905\nD)1834\nA\n9)When was Python 3 realesed?\nA)2000\nB)2012\nC)2010\nD)2014\nC\n10)Who is the president of USA?\nA)Micheele Obama\nB)Barack Obama\nC)George Washington\nD)Donald Trump\nD\n</code></pre>\n\n<p>My problem is that let\'s say for the first question the answer is "B" which is saved in variable x (to make sure x was actually "B" I printed it as seen in the code. Then I printed the user input which also was "B", but for some reason python does not execute the if statement below, even though the condition seems to be True. The condition states that userAnswer (which is where the user input is stored) is equal to the variable x the statement "You got that right should print" this is however not happening and the statement appears to evaluate as false, because if I put an else statement below it, it evaluates the else statement to true and executes the code under it. I would be really thankful if anyone could help me figure this one out.</p>\n\n<p>Edit: I am editing as the question was marked as a possible duplicate, I don\'t think it is a duplicate as the question that seems similar asks about why is readline() not reading an empty line, where my question was why "B" seems to not be equal to "B" (the problem was that I didn\'t know that print() doesn\'t tell you exactly what the variable is, thanks to a comment and the answer I choose as the most helpful I learned about print(repr()) which basically solved my problem).</p>\n',
        owner,
        ["python", "debugging", "if-statement", "logic"],
        true,
        66,
        1,
        1,
        1518829098,
        1518716579,
        "https://stackoverflow.com/questions/48813300/why-is-b-not-equal-to-b",
        "Why is &quot;B&quot; not equal to &quot;B&quot;?",
        [comment1, comment2],
        [answer],
        48813371,
        1518829098
      );

      observer.next([question]);
      observer.complete();
    });
  }

  getList(site: string , page: number) {
    return new Observable<Question[]>(observer => {
      const owner = new Owner(
        2907819,
        "registered",
        "https://i.stack.imgur.com/7ZJOa.gif?s=128&g=1",
        "Ni.",
        "https://stackoverflow.com/users/2907819/ni"
      );

      const comment1 = new Comment(
        owner,
        false,
        2,
        1518716927,
        48813300,
        84630260,
        "Well, unless you have a very bad version of python, I&#39;m sure &quot;B&quot; is equal to &quot;B&quot;. You should assume there is a bug in your code and put more effort into finding it."
      );
      const comment2 = new Comment(
        owner,
        false,
        2,
        1518716972,
        48813300,
        84630283,
        'Possible duplicate of <a href="https://stackoverflow.com/questions/34827263/python-readline-is-not-reading-a-line-with-single-space">Python readline() is not reading a line with single space</a>'
      );
      const answer = new Answer(
        owner,
        true,
        3,
        1518716844,
        1518716844,
        48813371,
        48813300,
        "<p>You're including the newline in the string you read from the file. You want </p>\n\n<p><code>x = file.readline().strip()</code></p>\n",
        [comment2]
      );
      const question: Question = new Question(
        48813300,
        '<p>I am making a little program in python that is supposed to read the questions from a text file in the format of give question, answers ABCD and should check if the user put in the correct answer. Below is the code I wrote for doing that</p>\n\n<pre><code>import time\n\nfile = open("Questions.txt", "r")\n\n\ndef askQuestion():\n    print(file.readline())\n    for counter in range(4):\n        print(file.readline())\n    x = file.readline()\n    userAnswer = input("Please input a letter that corresponds to the correct answer")\n    print("The answer is", userAnswer)\n    print("The X is", x)\n    if userAnswer.upper() == x:\n        print("You got that right")\n\n\nfor counter in range(10):\n    time.sleep(1)\n    askQuestion()\n\n\nfile.close()\n</code></pre>\n\n<p>and here is a text file with the questions and answers, in advance I just want to say that I am not sure if this is how I should format the text in the file so I am sorry if it isn\'t the right way to do it on stack overflow.</p>\n\n<pre><code>1) What was the name of the atomic bomb dropped on Hiroshima in 1945?\nA)Fat Man\nB)Little Boy\nC)Annihilator\nD)Heisenberg\nB\n2)How many stars is there on the American Flag?\nA)48\nB)47\nC)50\nD)52\nC\n3)How many countries is there in Europe?\nA)52\nB)38\nC)12\nD)28\nD\n4)What is the capital city of Poland?\nA)Warsaw\nB)Krakow\nC)Kijew\nD)Moscow\nA\n5)What are the colors on the polish flag?\nA)RED-WHITE\nB)WHITE-RED\nC)WHITE-GREEN\nD)YELLOW-BLUE\nB\n6)What does 2+2*2 evaluate to?\nA)8\nB)10\nC)6\nD)20\nC\n7)What year do we have?\nA)3920\nB)120\nC)20018\nD)2018\nD\n8)When did WW2 end?\nA)1945\nB)1919\nC)1905\nD)1834\nA\n9)When was Python 3 realesed?\nA)2000\nB)2012\nC)2010\nD)2014\nC\n10)Who is the president of USA?\nA)Micheele Obama\nB)Barack Obama\nC)George Washington\nD)Donald Trump\nD\n</code></pre>\n\n<p>My problem is that let\'s say for the first question the answer is "B" which is saved in variable x (to make sure x was actually "B" I printed it as seen in the code. Then I printed the user input which also was "B", but for some reason python does not execute the if statement below, even though the condition seems to be True. The condition states that userAnswer (which is where the user input is stored) is equal to the variable x the statement "You got that right should print" this is however not happening and the statement appears to evaluate as false, because if I put an else statement below it, it evaluates the else statement to true and executes the code under it. I would be really thankful if anyone could help me figure this one out.</p>\n\n<p>Edit: I am editing as the question was marked as a possible duplicate, I don\'t think it is a duplicate as the question that seems similar asks about why is readline() not reading an empty line, where my question was why "B" seems to not be equal to "B" (the problem was that I didn\'t know that print() doesn\'t tell you exactly what the variable is, thanks to a comment and the answer I choose as the most helpful I learned about print(repr()) which basically solved my problem).</p>\n',
        owner,
        ["python", "debugging", "if-statement", "logic"],
        true,
        66,
        1,
        1,
        1518829098,
        1518716579,
        "https://stackoverflow.com/questions/48813300/why-is-b-not-equal-to-b",
        "Why is &quot;B&quot; not equal to &quot;B&quot;?",
        [comment1, comment2],
        [answer],
        48813371,
        1518829098
      );

      observer.next([question]);
      observer.complete();
    });
  }
}
