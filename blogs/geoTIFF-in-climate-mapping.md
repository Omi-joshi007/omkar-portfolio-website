---
title: "5 Ways to Use GeoTIFFs in Climate Mapping"
slug: "geoTIFF-in-climate-mapping"
tag: "Geospatial"
img: "/tech_blogs/tech_blog_1.png"
---

<!-- Centered and resized image -->
<img src="/tech_blogs/tech_blog_1.png" alt="GeoTIFF Example" style="display: block; margin: 2rem auto; max-width: 70%; border-radius: 8px;" />

Working with **GeoTIFFs** allows precise representation of geospatial data in climate science and remote sensing.

## 🌍 Benefits of Using GeoTIFFs

- 📌 Raster data is **georeferenced**
- 🛠️ Easy to load into tools like **QGIS**, **ArcGIS**
- 📡 Ideal for **satellite** and **climate** datasets

## 🧪 Sample Code

```python
import rasterio

# Open GeoTIFF file
r = rasterio.open("file.tif")
print(r.bounds)
