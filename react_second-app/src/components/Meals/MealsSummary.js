import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <p>
        Choose your favorite from our broad selection of available meals and
        enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-intime and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
