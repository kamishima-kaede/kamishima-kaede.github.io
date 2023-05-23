---
title: three.js学习笔记
icon: link
category: threejs
tag:
  - threejs
  - javascript
  - webGL
isOriginal: true
timeline: true
date: 2023-05-23
article: false
---

`three.js`学习笔记。

<!-- more -->

## 核心概念

sceen（场景）：场景是一个容器，用于保存、跟踪说要渲染的物体和使用的光源。

camera（摄像机）：摄像机决定了能够在场景看到什么。

renderer（渲染器）：会基于摄像机的角度来计算场景对象在浏览器中会渲染成什么样子。

简单示例：

```html
<!DOCTYPE html>

<html>

<head>
    <title>Example 02.01 - Basic Scene</title>
    <script type="text/javascript" charset="UTF-8" src="../../libs/three/three.js"></script>
    <script type="text/javascript" charset="UTF-8" src="../../libs/three/controls/TrackballControls.js"></script>
    <script type="text/javascript" src="../../libs/util/Stats.js"></script>
    <script type="text/javascript" src="../../libs/util/dat.gui.js"></script>

    <script type="text/javascript" src="../js/util.js"></script>
    <script type="text/javascript" src="./js/02-01.js"></script>
    <link rel="stylesheet" href="../../css/default.css">
</head>

<body>
    <div id="webgl-output"></div>
    <script type="text/javascript">
        (function () {
            // your page initialization code here
            // the DOM will be available here
            init()
        })();
    </script>
</body>

</html>
```

```javascript
function init() {
    // 左上角帧率显示工具
    const stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    const scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);

    // create a render and set the size
    const renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // create the ground plane
    const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
    const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x3c3c3c);
    scene.add(ambientLight);

    // add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xffffff, 1.2, 150, 120);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // call the render function
    const step = 0;

    const controls = new function () {
        this.rotationSpeed = 0.02;
        this.numberOfObjects = scene.children.length;

        this.removeCube = function () {
            const allChildren = scene.children;
            const lastObject = allChildren[allChildren.length - 1];
            if (lastObject instanceof THREE.Mesh) {
                scene.remove(lastObject);
                this.numberOfObjects = scene.children.length;
            }
        };

        this.addCube = function () {

            const cubeSize = Math.ceil((Math.random() * 3));
            const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const cubeMaterial = new THREE.MeshLambertMaterial({
                color: Math.random() * 0xffffff
            });
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;
            cube.name = "cube-" + scene.children.length;


            // position the cube randomly in the scene

            cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
            cube.position.y = Math.round((Math.random() * 5));
            cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));

            // add the cube to the scene
            scene.add(cube);
            this.numberOfObjects = scene.children.length;
        };

        this.outputObjects = function () {
            console.log(scene.children);
        }
    };
    // dat.GUI 可视化改变代码变量
    const gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'addCube');
    gui.add(controls, 'removeCube');
    gui.add(controls, 'outputObjects');
    gui.add(controls, 'numberOfObjects').listen();

    // attach them here, since appendChild needs to be called first
    const trackballControls = initTrackballControls(camera, renderer);
    const clock = new THREE.Clock();

    render();
    
    function render() {

        trackballControls.update(clock.getDelta());
        stats.update();

        // rotate the cubes around its axes
        scene.traverse(function (e) {
            if (e instanceof THREE.Mesh && e != plane) {
                e.rotation.x += controls.rotationSpeed;
                e.rotation.y += controls.rotationSpeed;
                e.rotation.z += controls.rotationSpeed;
            }
        });

        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
}
```


### scene

```javascript
const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;
cube.position.set( -4, 3, 0)
cube.name = "cube"

scene.add(cube) // 添加物体
const c = scene.getObjectByName("cube") // 使用 name 获取物体
scene.remove(c) // 移除物体
const children = scene.children // scene 中所有物体
```

`traverse()`方法：参数`function`，递归遍历`scene`树，执行所传递的`function`参数。

scene对象属性：
- children
- fog：雾化
- overrideMaterial

scene对象方法：
- add()：添加物体
- remove()：移除物体
- getObjectByName()：使用`name`属性获取物体
