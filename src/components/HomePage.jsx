import React from 'react'

const HomePage = () => {
  return (
    <div className='home'>
      <h1>
        Hello,<br />
        I'm Takuya, <br />
        CS Student.
      </h1>
      <div className="profile">
        <h3>プロフィール</h3>
        <p className="name">上原 拓也</p>
        <p>長崎大学 情報データ科学部</p>
        <p>色々な知識を吸収して，新しい何かを作るのが好き．</p>
        <p>
          趣味はクリエイティブなこと全般．プログラミングやデザイン，写真撮影など．<br />
          また，映画鑑賞や旅行，カフェ巡りも人生の楽しみの一つ．
        </p>
        <p>
          小学3年生のときプログラミングに興味を持ち，最初に触れた言語はPHP．<br />
          きっかけは，Minecraftのサーバーを運営するためにプラグインを開発したいと思ったから．
        </p>
        <p>
          現在は，Web開発を中心に学習中．<br />
          また，データサイエンスや機械学習にも興味があり勉強中．
        </p>
        <p>デザインに理解のあるフロントエンドエンジニアとしてのキャリアを目指しています．</p>
      </div>
    </div>
  )
}

export default HomePage