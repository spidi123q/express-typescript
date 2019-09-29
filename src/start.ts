
import app from './index'
const port = process.env.PORT || 9090;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});