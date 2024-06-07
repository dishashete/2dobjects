document.addEventListener("DOMContentLoaded", function () {
  const canvas = new fabric.Canvas("canvas");
  const canvasContainer = document.getElementById("canvas-container-inner");

  const createText = (content, left, top, fontSize) => {
    return new fabric.Text(content, {
      left: left,
      top: top,
      fontSize: fontSize,
      fill: "white",
      selectable: false,
      originX: "center",
      originY: "center",
    });
  };

  // Create fabric.Rect objects for various components
  const power = new fabric.Rect({
    left: 50,
    top: 30,
    width: 50,
    height: 50,
    fill: "red",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  // Create fabric.Rect objects for various components
  const led = new fabric.Rect({
    left: 50,
    top: 100,
    width: 50,
    height: 50,
    fill: "yellow",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const switchSquare = new fabric.Rect({
    left: 50,
    top: 180,
    width: 50,
    height: 50,
    fill: "blue",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const irSensor = new fabric.Rect({
    left: 50,
    top: 260,
    width: 50,
    height: 50,
    fill: "purple",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const breadboard = new fabric.Rect({
    left: 50,
    top: 340,
    width: 50,
    height: 50,
    fill: "brown",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const potentiometer = new fabric.Rect({
    left: 50,
    top: 420,
    width: 50,
    height: 50,
    fill: "gray",
    selectable: true,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const IC = new fabric.Rect({
    left: 50,
    top: 500,
    width: 50,
    height: 50,
    fill: "green",
    selectable: true,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const AND = new fabric.Rect({
    left: 50,
    top: 580,
    width: 50,
    height: 50,
    fill: "orange",
    selectable: true,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const OR = new fabric.Rect({
    left: 50,
    top: 660,
    width: 50,
    height: 50,
    fill: "pink",
    selectable: true,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });

  const Touch = new fabric.Rect({
    left: 50,
    top: 740,
    width: 50,
    height: 50,
    fill: "green",
    selectable: true,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const zerozero = new fabric.Rect({
    left: 120,
    top: 30,
    width: 50,
    height: 50,
    fill: "green",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const zeroone = new fabric.Rect({
    left: 120,
    top: 100,
    width: 50,
    height: 50,
    fill: "red",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const onezero = new fabric.Rect({
    left: 120,
    top: 180,
    width: 50,
    height: 50,
    fill: "red",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const oneone = new fabric.Rect({
    left: 120,
    top: 260,
    width: 50,
    height: 50,
    fill: "green",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const Speaker = new fabric.Rect({
    left: 120,
    top: 340,
    width: 50,
    height: 50,
    fill: "yellow",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const LDR = new fabric.Rect({
    left: 120,
    top: 430,
    width: 50,
    height: 50,
    fill: "yellow",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const Logic = new fabric.Rect({
    left: 120,
    top: 500,
    width: 50,
    height: 50,
    fill: "red",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
  });
  const sensor1 = new fabric.Rect({
    left: 120,
    top: 590,
    width: 50,
    height: 50,
    fill: "green",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
    value: 30,
  });
  const sensor2 = new fabric.Rect({
    left: 120,
    top: 680,
    width: 50,
    height: 50,
    fill: "yellow",
    selectable: false,
    stroke: "#FFBF78", // Border color
    strokeWidth: 2,
    value: 50,
  });

  // Define fabric.Text objects for labels
  const powerText = createText(
    "POWER",
    power.left + power.width / 2,
    power.top + power.height / 2,
    12
  );
  const ledText = createText(
    "LED",
    led.left + led.width / 2,
    led.top + led.height / 2,
    12
  );
  const switchText = createText(
    "SWITCH",
    switchSquare.left + switchSquare.width / 2,
    switchSquare.top + switchSquare.height / 2,
    12
  );
  const irSensorText = createText(
    "IR Sensor",
    irSensor.left + irSensor.width / 2,
    irSensor.top + irSensor.height / 2,
    12
  );
  const breadboardText = createText(
    "Battery",
    breadboard.left + breadboard.width / 2,
    breadboard.top + breadboard.height / 2,
    12
  );
  const potentiometerText = createText(
    "POT",
    potentiometer.left + potentiometer.width / 2,
    potentiometer.top + potentiometer.height / 2,
    12
  );
  const ICText = createText(
    "IC",
    IC.left + IC.width / 2,
    IC.top + IC.height / 2,
    12
  );
  const ANDText = createText(
    "AND",
    AND.left + AND.width / 2,
    AND.top + AND.height / 2,
    12
  );
  const ORText = createText(
    "OR",
    OR.left + OR.width / 2,
    OR.top + OR.height / 2,
    12
  );

  const TouchText = createText(
    "Touch",
    Touch.left + Touch.width / 2,
    Touch.top + Touch.height / 2,
    12
  );
  const zerozeroText = createText(
    "0 0",
    zerozero.left + zerozero.width / 2,
    zerozero.top + zerozero.height / 2,
    12
  );
  const zerooneText = createText(
    "0 1",
    zeroone.left + zeroone.width / 2,
    zeroone.top + zeroone.height / 2,
    12
  );
  const onezeroText = createText(
    "1 0",
    onezero.left + onezero.width / 2,
    onezero.top + onezero.height / 2,
    12
  );
  const oneoneText = createText(
    "1 1",
    oneone.left + oneone.width / 2,
    oneone.top + oneone.height / 2,
    12
  );
  const SpeakerText = createText(
    "Speaker",
    Speaker.left + Speaker.width / 2,
    Speaker.top + Speaker.height / 2,
    12
  );
  const LDRText = createText(
    "LDR",
    LDR.left + LDR.width / 2,
    LDR.top + LDR.height / 2,
    12
  );
  const LogicText = createText(
    "Logic",
    Logic.left + Logic.width / 2,
    Logic.top + Logic.height / 2,
    12
  );
  const sensor1Text = createText(
    "sensor1",
    sensor1.left + sensor1.width / 2,
    sensor1.top + sensor1.height / 2,
    12
  );
  const sensor2Text = createText(
    "sensor2",
    sensor2.left + sensor2.width / 2,
    sensor2.top + sensor2.height / 2,
    12
  );

  // Create fabric.Group objects
  const powerGroup = new fabric.Group([power, powerText], {
    left: power.left,
    top: power.top,
    selectable: true,
    name: "POWER",
  });
  const ledGroup = new fabric.Group([led, ledText], {
    left: led.left,
    top: led.top,
    selectable: true,
    name: "LED",
  });

  const switchGroup = new fabric.Group([switchSquare, switchText], {
    left: switchSquare.left,
    top: switchSquare.top,
    selectable: true,
    name: "SWITCH",
  });

  const irSensorGroup = new fabric.Group([irSensor, irSensorText], {
    left: irSensor.left,
    top: irSensor.top,
    selectable: true,
    name: "IR Sensor",
  });

  const breadboardGroup = new fabric.Group([breadboard, breadboardText], {
    left: breadboard.left,
    top: breadboard.top,
    selectable: true,
    name: "Board",
  });

  const potentiometerGroup = new fabric.Group(
    [potentiometer, potentiometerText],
    {
      left: potentiometer.left,
      top: potentiometer.top,
      selectable: true,
      name: "POT",
    }
  );

  const IC555Group = new fabric.Group([IC, ICText], {
    left: IC.left,
    top: IC.top,
    selectable: true,
    name: "IC",
  });
  const ANDGroup = new fabric.Group([AND, ANDText], {
    left: AND.left,
    top: AND.top,
    selectable: true,
    name: "AND",
  });
  const ORGroup = new fabric.Group([OR, ORText], {
    left: OR.left,
    top: OR.top,
    selectable: true,
    name: "OR",
  });

  const TouchGroup = new fabric.Group([Touch, TouchText], {
    left: Touch.left,
    top: Touch.top,
    selectable: true,
    name: "Touch",
  });
  const zerozeroGroup = new fabric.Group([zerozero, zerozeroText], {
    left: zerozero.left,
    top: zerozero.top,
    selectable: true,
    name: "0 0",
  });
  const zerooneGroup = new fabric.Group([zeroone, zerooneText], {
    left: zeroone.left,
    top: zeroone.top,
    selectable: true,
    name: "0 1",
  });
  const onezeroGroup = new fabric.Group([onezero, onezeroText], {
    left: onezero.left,
    top: onezero.top,
    selectable: true,
    name: "1 0",
  });
  const oneoneGroup = new fabric.Group([oneone, oneoneText], {
    left: oneone.left,
    top: oneone.top,
    selectable: true,
    name: "1 1",
  });
  const SpeakerGroup = new fabric.Group([Speaker, SpeakerText], {
    left: Speaker.left,
    top: Speaker.top,
    selectable: true,
    name: "Speaker",
  });
  const LDRGroup = new fabric.Group([LDR, LDRText], {
    left: LDR.left,
    top: LDR.top,
    selectable: true,
    name: "LDR",
  });

  const LogicGroup = new fabric.Group([Logic, LogicText], {
    left: Logic.left,
    top: Logic.top,
    selectable: true,
    name: "Logic",
  });
  const sensor1Group = new fabric.Group([sensor1, sensor1Text], {
    left: sensor1.left,
    top: sensor1.top,
    selectable: true,
    name: "sensor1",
  });
  const sensor2Group = new fabric.Group([sensor2, sensor2Text], {
    left: sensor2.left,
    top: sensor2.top,
    selectable: true,
    name: "sensor2",
  });

  // Function to update AND and OR gate colors

  // Add fabric.Group objects to canvas
  canvas.add(
    powerGroup,
    ledGroup,
    switchGroup,
    irSensorGroup,
    breadboardGroup,
    potentiometerGroup,
    IC555Group,
    ANDGroup,
    ORGroup,
    TouchGroup,
    zerozeroGroup,
    zerooneGroup,
    onezeroGroup,
    oneoneGroup,
    SpeakerGroup,
    LDRGroup,
    LogicGroup,
    sensor1Group,
    sensor2Group
  );

  const canvasText = new fabric.Text("ROBO MAKER WORKSPACE", {
    left: canvas.getWidth() / 2, // Initial left position
    top: 25, // Initial top position
    fontSize: 100, // Initial font size
    fontFamily: "Seymour One",
    fill: "black",
    originX: "center", // Center the text horizontally
  });
  canvas.add(canvasText);

  // Resize canvas function
  function resizeCanvas() {
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;

    const widthScale = containerWidth / canvas.width;
    const heightScale = containerHeight / canvas.height;

    canvas.setDimensions({
      width: containerWidth,
      height: containerHeight,
    });

    canvas.getObjects().forEach((object) => {
      // Calculate new positions and sizes based on the scaling factors
      const newLeft = object.left * widthScale;
      const newTop = object.top * heightScale;
      const newWidth = object.width * widthScale;
      const newHeight = object.height * heightScale;

      // Set new positions and sizes for the object
      object.set({
        left: newLeft,
        top: newTop,
        width: newWidth,
        height: newHeight,
      });

      // Update object's coordinates
      object.setCoords();
    });
    canvasText.set({
      left: containerWidth / 2,
      top: 25 * heightScale,
      fontSize: 25 * Math.min(widthScale, heightScale),
    });

    canvas.renderAll();
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();

  // Add event listener for mouse down on the canvas
  canvas.on("mouse:down", function (options) {
    if (options.target) {
      options.target.set({
        selectable: true,
      });
      canvas.renderAll();
    }
  });

  // Function to check distance between objects
  var distanceThreshold = 100; // Adjust as needed

  function checkDistance(obj1, obj2) {
    var dx = obj1.left - obj2.left;
    var dy = obj1.top - obj2.top;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
  }

  function checkOverlap(obj1, obj2) {
    return (
      obj1.intersectsWithObject(obj2) ||
      obj1.isContainedWithinObject(obj2) ||
      obj2.isContainedWithinObject(obj1)
    );
  }

  function isConnected(obj1, obj2) {
    var distance = checkDistance(obj1, obj2);
    return distance <= distanceThreshold;
  }

  function bfs(startObj, targetObj) {
    var queue = [startObj];
    var visited = new Set();
    visited.add(startObj);

    while (queue.length > 0) {
      var currentObj = queue.shift();
      if (currentObj === targetObj) {
        return true;
      }

      canvas.getObjects().forEach((obj) => {
        if (!visited.has(obj) && isConnected(currentObj, obj)) {
          visited.add(obj);
          queue.push(obj);
        }
      });
    }

    return false;
  }

  var switchDragged = false; // Flag to track if switch has been dragged
  var switchOn = false; // Flag to track if switch is on

  // Define a function to reset the position of the object on the div
  // Define a function to reset the position of the object on the canvas
  canvas.on("object:modified", function (e) {
    var objects = canvas.getObjects().filter((obj) => obj !== e.target);

    // Check for overlaps between the modified object and other objects on canvas
    objects.forEach((obj) => {
      if (checkOverlap(e.target, obj)) {
        // Adjust the position to remove the overlap
        var newLeft = obj.left + obj.width;
        var newTop = obj.top;

        e.target.set({
          left: newLeft,
          top: newTop,
        });
      } else {
        // Check if objects are next to each other horizontally or vertically
        var distanceX = Math.abs(e.target.left - obj.left);
        var distanceY = Math.abs(e.target.top - obj.top);

        if (distanceX <= distanceThreshold && distanceY <= distanceThreshold) {
          // Determine the appropriate new position
          if (distanceX <= distanceY) {
            // Arrange vertically
            if (e.target.top > obj.top) {
              // Move below the object
              e.target.set({
                left: obj.left,
                top: obj.top + obj.height,
              });
            } else {
              // Move above the object
              e.target.set({
                left: obj.left,
                top: obj.top - e.target.height,
              });
            }
          } else {
            // Arrange horizontally
            if (e.target.left > obj.left) {
              // Move to the right of the object
              e.target.set({
                left: obj.left + obj.width,
                top: obj.top,
              });
            } else {
              // Move to the left of the object
              e.target.set({
                left: obj.left - e.target.width,
                top: obj.top,
              });
            }

            // Adjust the position to ensure the objects are touching
            var overlap =
              e.target.left > obj.left
                ? obj.left + obj.width - e.target.left
                : e.target.left + e.target.width - obj.left;
            e.target.set({
              left: e.target.left + overlap,
            });
          }
        }
      }
    });
    // Check if the modified object is the switch
    if (e.target === switchGroup) {
      switchDragged = true; // Set the flag to true
    }

    updateLedState(); // Update the LED state after modification

    // Check if the modified object is the IC square
    if (e.target === IC) {
      updateICSquareColor(); // Update the color of the IC square
    }

    // Check if the modified object is the IR sensor square
    if (e.target === irSensor) {
      simulateProximity(); // Simulate proximity after dragging IR sensor
    }

    canvas.renderAll();
  });

  function updateLedState() {
    if (
      switchOn &&
      bfs(powerGroup, switchGroup) &&
      bfs(switchGroup, ledGroup)
    ) {
      led.set({ fill: "green" });
    } else {
      led.set({ fill: "yellow" });
    }
    canvas.renderAll();
  }

  // Function to handle switch click
  switchGroup.on("mousedown", function () {
    if (switchDragged) {
      // Check if switch has been dragged
      // Check if switch has been dragged before changing color
      switchOn = !switchOn; // Toggle the switch state
      switchSquare.set({ fill: switchOn ? "pink" : "blue" });
      updateLedState();
    }
  });

  // Function to update potentiometer color based on position
  function updatePotentiometerColor(potentiometerGroup) {
    var position = potentiometerGroup.left + potentiometerGroup.top; // Calculate position
    var maxPosition = canvas.width + canvas.height; // Maximum position value
    var intensity = Math.min(
      255,
      Math.max(0, Math.round((position / maxPosition) * 255))
    ); // Calculate intensity
    var color = `rgb(${intensity}, ${intensity}, ${intensity})`; // Create color based on intensity
    potentiometer.set({ fill: color }); // Update potentiometer color
    canvas.renderAll();
  }

  // Set initial zoom level
  var zoomLevel = 1;

  // Function to zoom in
  function zoomIn() {
    zoomLevel += 0.1;
    canvas.setZoom(zoomLevel);
  }

  // Function to zoom out
  function zoomOut() {
    zoomLevel -= 0.1;
    canvas.setZoom(zoomLevel);
  }

  // Attach event listeners to zoom in and zoom out SVG icons
  document.getElementById("zoom-in").addEventListener("click", zoomIn);
  document.getElementById("zoom-out").addEventListener("click", zoomOut);

  // Add hover effect
  let isPowerConnected = false;
  // Function to simulate connecting power
  function connectPower() {
    isPowerConnected = true;
  }

  // Simulate power connection (for demonstration purposes)
  connectPower();

  // Add hover effect with the additional condition
  TouchGroup.on("mouseover", function () {
    if (isPowerConnected) {
      Touch.set("fill", "pink");
      canvas.renderAll();
    }
  });

  TouchGroup.on("mouseout", function () {
    Touch.set("fill", "green");
    canvas.renderAll();
  });

  // Add event listener for potentiometer drag
  potentiometerGroup.on("moving", function () {
    if (isPowerConnected) {
      updatePotentiometerColor(potentiometerGroup);
    }
  });

  var color1 = "green"; // Define Color1
  var color2 = "blue"; // Define Color2
  var period = 10000; // Default period in milliseconds, you can adjust this as needed

  const ICcolor1 = "green";
  const ICcolor2 = "blue";
  var currentColor = ICcolor1; // Initialize currentColor to color1

  function updateICSquareColor() {
    if (isPowerConnected) {
      // Toggle between color1 and color2
      if (currentColor === ICcolor1) {
        IC.set({ fill: ICcolor2 }); // Update to color2
        currentColor = ICcolor2; // Update currentColor
      } else {
        IC.set({ fill: ICcolor1 }); // Update to color1
        currentColor = ICcolor1; // Update currentColor
      }
      canvas.renderAll(); // Render the updated canvas
    }
  }
  updateICSquareColor();

  // Function to simulate proximity and update IR sensor color
  function simulateProximity() {
    var proximity = getProximity(); // Get simulated proximity value
    updateIRSensorColor(proximity); // Update color based on proximity
  }

  // Call the function to update the color initially and then set it to update periodically

  setInterval(updateICSquareColor, period); // Update color every `period` milliseconds

  var color_active = "blue"; // Define Color_active
  var color_inactive = "purple"; // Define Color_inactive
  var proximity_threshold = 50; // Define the proximity threshold in pixels
  var set_distance = 250; // Define the set distance in pixels

  function updateIRSensorColor(proximity) {
    if (proximity < proximity_threshold) {
      irSensor.set({ fill: color_active }); // Set color_active if proximity is below threshold
    } else {
      irSensor.set({ fill: color_inactive }); // Set color_inactive if proximity is above threshold
    }

    canvas.renderAll();
  }

  // Simulated function to get proximity value
  function getProximity() {
    // This function should return the simulated proximity value
    // For now, let's assume it returns a random value between 0 and 100
    return Math.floor(Math.random() * 101); // Random value between 0 and 100
  }

  function updateSpeakerColor(value) {
    const redIntensity = Math.round(value * 255);
    const color = `rgb(${redIntensity}, 0, 0)`; // Only red color changes based on slider
    Speaker.set({ fill: color });
    canvas.renderAll();
  }

  // Add event listener for the slider
  const colorSlider = document.getElementById("colorSlider");
  colorSlider.addEventListener("input", function () {
    const sliderValue = parseFloat(this.value);
    updateSpeakerColor(sliderValue);
  });

  // Call updateSpeakerColor initially to set the color based on the initial slider value
  updateSpeakerColor(parseFloat(colorSlider.value));

  LDR.on("modified", function () {
    console.log("LDR object has been dragged");
    const sliderValue = parseFloat(colorSlider2.value);
    updateBackgroundColor(sliderValue);
  });

  function updateLDRColor(value) {
    const redIntensity = Math.round(value * 255);
    const greenIntensity = Math.round((1 - value) * 255);
    const color = `rgb(${redIntensity}, ${greenIntensity}, 0)`;

    // Update the fill color of the LDR object
    LDR.set("fill", color);

    // Render the canvas to apply changes
    canvas.renderAll();
  }

  // Add event listener for the slider
  const slider = document.getElementById("colorSlider2");
  slider.addEventListener("input", function () {
    const sliderValue = parseFloat(this.value);
    updateLDRColor(sliderValue);
  });

  // Call updateBackgroundColor initially to set the color based on the initial slider value
  //updateBackgroundColor(parseFloat(colorSlider2.value));

  function changeANDColorToRed() {
    AND.set({ fill: "red" });
    canvas.renderAll();
  }
  function changeORColorToRed() {
    OR.set({ fill: "red" });
    canvas.renderAll();
  }

  // Add event listener for click on "1 1" block
  oneoneGroup.on("moving", function () {
    console.log("1 1 block clicked");
    changeANDColorToRed();
    changeORColorToRed();
  });
  onezeroGroup.on("moving", function () {
    console.log("1 0 block clicked");
    changeORColorToRed();
  });
  zerooneGroup.on("moving", function () {
    console.log("0 1 block clicked");
    changeORColorToRed();
  });

  function attachToCanvas(objects) {
    /*if (!canAttachObjects(objects)) {
      alert("You can only attach up to 10 objects at a time.");
      return;
    }*/
    objects.forEach((obj) => canvas.add(obj));
  }

  // Modify or call the attach function accordingly in the script
  attachToCanvas([
    powerGroup,
    ledGroup,
    switchGroup,
    irSensorGroup,
    breadboardGroup,
    potentiometerGroup,
    IC555Group,
    ANDGroup,
    ORGroup,
    TouchGroup,
    zerozeroGroup,
    zerooneGroup,
    onezeroGroup,
    oneoneGroup,
    SpeakerGroup,
    LDRGroup,
    LogicGroup,
    sensor1Group,
    sensor2Group,
  ]);
  // Function to check if sensor2 is connected to Logic and change the color of Logic
  // Function to check if sensor2 is connected to Logic and change the color of Logic
  fabric.SensorRect = fabric.util.createClass(fabric.Rect, {
    type: "sensorRect",
    initialize: function (options) {
      options || (options = {});
      this.callSuper("initialize", options);
      this.value = options.value || 0;
    },
    toObject: function () {
      return fabric.util.object.extend(this.callSuper("toObject"), {
        value: this.value,
      });
    },
  });

  function checkSensorsValue() {
    if (Logic.connectedSensors && Logic.connectedSensors.length === 2) {
      const sensor1Value = Logic.connectedSensors.find(
        (sensor) => sensor.name === "sensor1"
      ).value;
      const sensor2Value = Logic.connectedSensors.find(
        (sensor) => sensor.name === "sensor2"
      ).value;
      const maxValue = Math.max(sensor1Value, sensor2Value);
      console.log(
        `The greater value between Sensor1 and Sensor2 is: ${maxValue}`
      );
    }
  }

  // Assuming Logic.connectedSensors is an array to hold connected sensors
  Logic.connectedSensors = [];

  // Connect sensors to LogicGroup
  LogicGroup.on("selected", function () {
    Logic.connectedSensors = [sensor1, sensor2];
    checkSensorsValue();
  });

  // Initial check in case objects are already connected
});
