const targetUrl = 'https://www.tapology.com/fightcenter/fighters/8196-chris-barnett-beast-boy';  // 更新をチェックするリンク先
const interval = 60000;  // チェック間隔（ミリ秒）

let previousContent = '';  // 前回のコンテンツを保存する変数

function checkForUpdates() {
    fetch(targetUrl)
        .then(response => response.text())
        .then(content => {
            if (content !== previousContent) {
                // コンテンツが変更された場合の処理
                const targetParagraph = document.getElementById('targetParagraph');
                let messageElement = document.getElementById('updateMessage');
                
                // 既存のメッセージ要素がない場合に作成
                if (!messageElement) {
                    messageElement = document.createElement('span');
                    messageElement.id = 'updateMessage';
                    messageElement.classList.add('blink');
                    messageElement.textContent = '近日試合あり';
                    targetParagraph.appendChild(messageElement);
                }
                
                previousContent = content;
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}

// 指定した間隔でcheckForUpdates関数を呼び出す
setInterval(checkForUpdates, interval);
