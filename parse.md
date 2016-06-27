[^\bAula \d{1,}\b]([\d]{2}\s\-\s)([\w]*)


1 - (\Aula \d{2})
1 -- "classes": [{ "title": "$1", \n "items": [  // WRONG

2 - (\d{2}\s-\s)(.*)
2 -- "$2",


3 - ("classes": \[)
3 -- ]}, 