# google-home-test

## google-home-notifier

### 使い方

```

# node ghn.js

```

喋らせたいことは、`googlehome.notify`の第1引数に指定。


### 所感

`googlehome.device` だと日本語いけるけど、同セグにブロードキャストしてしまう。   `googlehome.ip` だと機器を指定できるけど、日本語いけない。


google home1台だと問題ないけど複数台にしたときに全員喋りだしてしまうと思われる。


## [GoogleHomeスピーカーに外部からプッシュして自発的に話してもらいます](https://qiita.com/azipinsyan/items/db4606aaa51426ac8dac)


### 使い方

nodeを起動しておく。

```

# node ghn_ja.js

```

ngrokにPOSTする。

```

# curl -X POST -d "text=Hello Google Home" https://xxxxxxxx.ngrok.io/google-home-notifier

```

### 所感

こちらだとうまくいく。
node起動しとかないといけないけど、POSTでできる。あとはgoで書くとかできそう。

## References
* [google-home-notifier](https://github.com/noelportugal/google-home-notifier)
* [GoogleHomeスピーカーに外部からプッシュして自発的に話してもらいます](https://qiita.com/azipinsyan/items/db4606aaa51426ac8dac)