# Video To Highlight

## Video to Highlights API

```python

# Convert video to a few highlight reels


```



```
POST /videoHighlight
{
    "videoToHighlight": "https://www.youtube.com/watch?v=QVKj3LADCnA&list=PL49CF3715CB9EF31D",
    "objective": "I want to build a project on video search. My background is a Javascript developer.",
}

Response:
{
    "highlights": [
        {
            "order_number": 1,
            "start_time": "",
            "end_time": "",
            "reason_for_highlight": ""
        },

    ],
}
```