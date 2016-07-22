import { geotiff } from 'geotiff';
import { fs } from 'fs';
export function run() {

  fs.readFile(path, function(err, data) {
    if (err) throw err;
    var tiff = GeoTIFF.parse(data);
    // ...
  });

}
