import { useEffect, useState } from "react";
import { startGame } from "../../api/Game";
import ShopCardSimple from "./ShopCardSimple/ShopCardSimple";
import RecommendShop from "./RecommendedShop.jsx/RecommendedShop";
import { Container, LinearProgress } from "@mui/material";

export function Game() {
  const testUserEmail = "kakao_djajsl54@naver.com";
  const testGameMode = 0;

  const [data, setData] = useState(null);
  const [gameRound, setGameRound] = useState(1);
  const [recommendedShopDetail, setRecommendedShopDetail] = useState(null);

  useEffect(() => {
    startGame({ userEmail: testUserEmail, gameMode: testGameMode })
      .then((response) => {
        setData(response);
        setGameRound(response.curRound);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container className="justify-content-md-center w-100">
      {data !== null && gameRound < data.totalRound ? (
        <div className="cherry-linear-progress">
          <LinearProgress
            valueBuffer={100}
            value={data !== null ? (gameRound / data.totalRound) * 100 : 0}
            variant="determinate"
            color="primary"
            className="mb-2"
          />
        </div>
      ) : null}
      {data !== null && data.curRound !== data.totalRound
        ? data.recommendShops.map((shop, index) => {
            return index === gameRound % 3 && gameRound !== data.totalRound ? (
              <ShopCardSimple
                key={index}
                gameId={data.gameId}
                shopId={shop.shopId}
                shopMainPhoto1={shop.shopMainPhoto1}
                shopMainPhoto2={shop.shopMainPhoto2}
                oneLineReview={shop.oneLineReview}
                shopCategory={shop.shopCategory}
                shopClipping={shop.shopClipping}
                shopName={shop.shopName}
                topTags={shop.topTags}
                gameRound={gameRound}
                totalRound={data.totalRound}
                setGameRound={setGameRound}
                setData={setData}
                setRecommendedShopDetail={setRecommendedShopDetail}
              ></ShopCardSimple>
            ) : null;
          })
        : null}
      {recommendedShopDetail !== null && recommendedShopDetail !== undefined ? (
        <RecommendShop recommendedShopDetail={recommendedShopDetail} />
      ) : null}
    </Container>
  );
}

export default Game;
