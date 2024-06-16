import { useState } from "react";
import { swipeLeft, swipeRight } from "../../../api/Game";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  LinearProgress,
  Box,
} from "@mui/material";
import ProgressBarWithPercent from "../../../component/ProgressBarWithPercent";

export function ShopCardSimple({
  gameId,
  shopId,
  shopMainPhoto1,
  shopMainPhoto2,
  oneLineReview,
  shopCategory,
  shopClipping,
  shopName,
  topTags,
  gameRound,
  totalRound,
  setGameRound,
  setData,
  setRecommendedShopDetail,
}) {
  const variant = "Light";
  const [show, setShow] = useState(true);

  if (
    gameRound % 3 === 0 &&
    gameRound !== 0 &&
    gameRound !== totalRound &&
    show === false
  ) {
    setShow(true);
  }

  // left swipe
  const swipeLeftEvent = () => {
    swipeLeft({ gameId: gameId, shopId: shopId }).then((response) => {
      setGameRound(gameRound + 1);
      if (
        response.recommendShopIds !== null &&
        response.recommendShopIds !== undefined
      ) {
        setData(response);
      } else if (
        response.recommendedShopDetail !== null &&
        response.recommendedShopDetail !== undefined
      ) {
        setRecommendedShopDetail(response.recommendedShopDetail);
      }
      setShow(false);
    });
  };

  // right swipe
  const swipeRightEvent = () => {
    swipeRight({ gameId: gameId, shopId: shopId }).then((response) => {
      setGameRound(gameRound + 1);
      if (
        response.recommendShopIds !== null &&
        response.recommendShopIds !== undefined
      ) {
        setData(response);
      } else if (
        response.recommendedShopDetail !== null &&
        response.recommendedShopDetail !== undefined
      ) {
        setRecommendedShopDetail(response.recommendedShopDetail);
      }
      setShow(false);
    });
  };

  return show ? (
    <Card
      style={{ width: "18rem" }}
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2 shadow rounded"
    >
      <div className="row">
        <CardMedia
          className="col pe-0"
          sx={{ height: 140 }}
          image={shopMainPhoto1}
          title="Main image1"
        />
        <CardMedia
          className="col pe-0"
          sx={{ height: 140 }}
          image={shopMainPhoto2}
          title="Main image2"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {shopName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneLineReview}
        </Typography>
        {topTags.map((tag, index) => {
          return (
            <div key={index}>
              <Typography
                variant="body2"
                color="text.secondary"
                className="left-aligned"
              >
                {tag.description}
              </Typography>
              <ProgressBarWithPercent percent={tag.value} />
            </div>
          );
        })}
        <CardActions>
          <Button className="col" onClick={swipeLeftEvent} variant="danger">
            BAD
          </Button>
          <Button className="col" onClick={swipeRightEvent} variant="success">
            GOOD
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  ) : null;
}

export default ShopCardSimple;
