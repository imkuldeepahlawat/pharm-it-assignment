#Setup file to upload data to mongo db
mongo pharmit --eval "db.dropDatabase()"
mongoimport -d pharmit -c products --file data/export_xflix_videos.json