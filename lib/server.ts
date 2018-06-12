import app from './app';

const port : number = 3000;

app.listen(port, () => {
    //console.log('Server is running on port 3000:');
    //console.log(__dirname);
    console.log(`Server is running on port: ${port}`);
});