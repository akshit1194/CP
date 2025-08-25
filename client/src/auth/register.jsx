
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

const CharterPartyRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const shipRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const seaAnimalsRef = useRef([]);
  const navigate = useNavigate();
  const userType = 'broker'; // Fixed to broker

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x006994, 0.5);
    scene.add(hemisphereLight);

    // Create professional ship
    const createShip = () => {
      const shipGroup = new THREE.Group();

      // Ship hull
      const hullGeometry = new THREE.CylinderGeometry(0.8, 1.2, 6, 16);
      const hullMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x2c3e50,
        shininess: 100,
        specular: 0x111111
      });
      const hull = new THREE.Mesh(hullGeometry, hullMaterial);
      hull.rotation.z = Math.PI / 2;
      hull.castShadow = true;
      hull.receiveShadow = true;
      shipGroup.add(hull);

      // Deck
      const deckGeometry = new THREE.BoxGeometry(5.5, 0.2, 1.8);
      const deckMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        shininess: 50
      });
      const deck = new THREE.Mesh(deckGeometry, deckMaterial);
      deck.position.y = 0.9;
      deck.castShadow = true;
      shipGroup.add(deck);

      // Cabin structure
      const cabinGeometry = new THREE.BoxGeometry(2.5, 1.8, 1.5);
      const cabinMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        shininess: 80
      });
      const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
      cabin.position.set(-0.5, 1.9, 0);
      cabin.castShadow = true;
      shipGroup.add(cabin);

      // Bridge
      const bridgeGeometry = new THREE.BoxGeometry(1.8, 1, 1.2);
      const bridgeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xe8e8e8,
        shininess: 90
      });
      const bridge = new THREE.Mesh(bridgeGeometry, bridgeMaterial);
      bridge.position.set(-0.3, 2.9, 0);
      bridge.castShadow = true;
      shipGroup.add(bridge);

      // Smokestack
      const stackGeometry = new THREE.CylinderGeometry(0.15, 0.18, 2, 8);
      const stackMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x34495e,
        shininess: 100
      });
      const stack = new THREE.Mesh(stackGeometry, stackMaterial);
      stack.position.set(-1.5, 3.5, 0);
      stack.castShadow = true;
      shipGroup.add(stack);

      // Mast
      const mastGeometry = new THREE.CylinderGeometry(0.05, 0.08, 4, 8);
      const mastMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x654321,
        shininess: 20
      });
      const mast = new THREE.Mesh(mastGeometry, mastMaterial);
      mast.position.set(0.5, 4, 0);
      mast.castShadow = true;
      shipGroup.add(mast);

      // Sails
      const sailGeometry = new THREE.PlaneGeometry(1.5, 2.5);
      const sailMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf8f8ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        shininess: 30
      });
      const sail1 = new THREE.Mesh(sailGeometry, sailMaterial);
      sail1.position.set(1.2, 3.5, 0);
      sail1.rotation.y = Math.PI / 2;
      shipGroup.add(sail1);

      // Bow decoration
      const bowGeometry = new THREE.ConeGeometry(0.2, 0.8, 8);
      const bowMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffd700,
        shininess: 100
      });
      const bow = new THREE.Mesh(bowGeometry, bowMaterial);
      bow.position.set(2.8, 1.2, 0);
      bow.rotation.z = -Math.PI / 2;
      bow.castShadow = true;
      shipGroup.add(bow);

      // Anchor
      const anchorGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.1);
      const anchorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x2c3e50,
        shininess: 80
      });
      const anchor = new THREE.Mesh(anchorGeometry, anchorMaterial);
      anchor.position.set(2.2, 0.5, 0.8);
      anchor.castShadow = true;
      shipGroup.add(anchor);

      return shipGroup;
    };

    // Create ocean with enhanced waves
    const createOcean = () => {
      const oceanGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
      const oceanMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x006994,
        transparent: true,
        opacity: 0.9,
        shininess: 100,
        specular: 0x87CEEB
      });
      const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
      ocean.rotation.x = -Math.PI / 2;
      ocean.position.y = -2;
      ocean.receiveShadow = true;

      // Add wave animation to vertices
      const vertices = oceanGeometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin(vertices[i] * 0.1) * 0.2 + Math.cos(vertices[i + 1] * 0.1) * 0.2;
      }
      oceanGeometry.attributes.position.needsUpdate = true;

      return ocean;
    };

    // Create sea animals
    const createSeaAnimals = () => {
      const animals = [];
      
      // Dolphins
      for (let i = 0; i < 3; i++) {
        const dolphinGroup = new THREE.Group();
        
        // Dolphin body
        const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 2, 8);
        bodyGeometry.translate(0, 0, 1);
        const bodyMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xA9A9A9,
          shininess: 50
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        dolphinGroup.add(body);
        
        // Dolphin fin
        const finGeometry = new THREE.ConeGeometry(0.2, 0.5, 8);
        finGeometry.rotateX(Math.PI / 2);
        const finMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x708090,
          shininess: 30
        });
        const fin = new THREE.Mesh(finGeometry, finMaterial);
        fin.position.set(0, 0.2, 0.8);
        dolphinGroup.add(fin);
        
        // Position dolphins around the scene
        const angle = (i / 3) * Math.PI * 2;
        const radius = 15 + Math.random() * 10;
        dolphinGroup.position.set(
          Math.cos(angle) * radius,
          -1 + Math.random() * 0.5,
          Math.sin(angle) * radius
        );
        
        scene.add(dolphinGroup);
        animals.push({
          mesh: dolphinGroup,
          speed: 0.5 + Math.random() * 0.5,
          angle: angle,
          radius: radius,
          offset: Math.random() * Math.PI * 2
        });
      }
      
      // Fish
      for (let i = 0; i < 10; i++) {
        const fishGroup = new THREE.Group();
        
        // Fish body
        const bodyGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const bodyMaterial = new THREE.MeshPhongMaterial({ 
          color: Math.random() > 0.5 ? 0xFF6347 : 0x4682B4,
          shininess: 30
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        fishGroup.add(body);
        
        // Fish tail
        const tailGeometry = new THREE.ConeGeometry(0.1, 0.4, 8);
        tailGeometry.rotateZ(Math.PI / 2);
        const tailMaterial = new THREE.MeshPhongMaterial({ 
          color: Math.random() > 0.5 ? 0xFF6347 : 0x4682B4,
          shininess: 30
        });
        const tail = new THREE.Mesh(tailGeometry, tailMaterial);
        tail.position.set(-0.3, 0, 0);
        fishGroup.add(tail);
        
        // Position fish around the scene
        const angle = (i / 10) * Math.PI * 2;
        const radius = 5 + Math.random() * 15;
        fishGroup.position.set(
          Math.cos(angle) * radius,
          -1.5 + Math.random() * 1,
          Math.sin(angle) * radius
        );
        fishGroup.scale.set(0.7, 0.7, 0.7);
        
        scene.add(fishGroup);
        animals.push({
          mesh: fishGroup,
          speed: 1 + Math.random() * 1,
          angle: angle,
          radius: radius,
          offset: Math.random() * Math.PI * 2
        });
      }
      
      return animals;
    };

    // Create sky
    const skyGeometry = new THREE.SphereGeometry(200, 32, 32);
    const skyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x87CEEB,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.9
    });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);

    // Create clouds
    const createClouds = () => {
      const cloudGroup = new THREE.Group();
      for (let i = 0; i < 12; i++) {
        const cloudGeometry = new THREE.SphereGeometry(3 + Math.random() * 2, 8, 8);
        const cloudMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.7
        });
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloud.position.set(
          (Math.random() - 0.5) * 100,
          15 + Math.random() * 15,
          (Math.random() - 0.5) * 100
        );
        cloud.scale.set(
          1 + Math.random() * 0.8,
          0.5 + Math.random() * 0.5,
          1 + Math.random() * 0.8
        );
        cloudGroup.add(cloud);
      }
      return cloudGroup;
    };

    // Add everything to scene
    const ship = createShip();
    const ocean = createOcean();
    const clouds = createClouds();
    const seaAnimals = createSeaAnimals();
    
    ship.position.set(0, 0, 0);
    scene.add(ship);
    scene.add(ocean);
    scene.add(clouds);
    
    shipRef.current = ship;
    seaAnimalsRef.current = seaAnimals;

    // Camera positioning
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);

    // Animation
    let time = 0;
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      time += 0.01;

      if (shipRef.current) {
        // Ship bobbing motion
        shipRef.current.position.y = Math.sin(time * 1.2) * 0.3;
        shipRef.current.rotation.z = Math.sin(time * 0.8) * 0.05;
        shipRef.current.rotation.x = Math.cos(time * 0.6) * 0.03;

        // Gentle forward movement
        shipRef.current.position.x = Math.sin(time * 0.3) * 2;
      }

      // Ocean wave animation
      const vertices = ocean.geometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        vertices[i + 2] = Math.sin(x * 0.1 + time * 2) * 0.3 + 
                         Math.cos(y * 0.1 + time * 1.5) * 0.2 +
                         Math.sin(x * 0.05 + time) * 0.1;
      }
      ocean.geometry.attributes.position.needsUpdate = true;

      // Sea animals animation
      seaAnimalsRef.current.forEach((animal) => {
        animal.angle += 0.01 * animal.speed;
        animal.mesh.position.x = Math.cos(animal.angle + animal.offset) * animal.radius;
        animal.mesh.position.z = Math.sin(animal.angle + animal.offset) * animal.radius;
        animal.mesh.position.y = -1.5 + Math.sin(time * 2 + animal.offset) * 0.5;
        
        // Make animals face their direction of movement
        animal.mesh.lookAt(
          Math.cos(animal.angle + animal.offset + 0.1) * animal.radius,
          -1.5 + Math.sin(time * 2 + animal.offset + 0.1) * 0.5,
          Math.sin(animal.angle + animal.offset + 0.1) * animal.radius
        );
      });

      // Cloud movement
      clouds.children.forEach((cloud, index) => {
        cloud.position.x += Math.sin(time + index) * 0.005;
        cloud.position.z += Math.cos(time + index) * 0.005;
      });

      // Camera orbit
      const radius = 15;
      camera.position.x = Math.cos(time * 0.15) * radius;
      camera.position.z = Math.sin(time * 0.15) * radius;
      camera.position.y = 6 + Math.sin(time * 0.2) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    setLoading(false);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Registration:', { userType, name, email, password });
      // Add your registration logic here
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-maritime relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sail-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Left Panel - Registration Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 backdrop-blur-sm bg-black/20">
          <div className="w-full max-w-md">
            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20 rounded-lg">
                <div className="text-center text-sail-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sail-white mx-auto mb-4"></div>
                  <p className="text-lg font-semibold">Loading Maritime Scene...</p>
                </div>
              </div>
            )}

            {/* Logo/Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-sail-white mb-2 tracking-wide">
                ⚓ Charter Party
              </h1>
              <p className="text-ocean-foam text-lg">Broker Registration</p>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-ocean-foam font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${
                    errors.name ? 'border-red-400' : 'border-border focus:border-ocean-surface'
                  }`}
                  placeholder="Broker John Smith"
                  required
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-ocean-foam font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${
                    errors.email ? 'border-red-400' : 'border-border focus:border-ocean-surface'
                  }`}
                  placeholder="broker@example.com"
                  required
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-ocean-foam font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${
                    errors.password ? 'border-red-400' : 'border-border focus:border-ocean-surface'
                  }`}
                  placeholder="Create a strong password"
                  required
                />
                {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-ocean-foam font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-400' : 'border-border focus:border-ocean-surface'
                  }`}
                  placeholder="Confirm your password"
                  required
                />
                {errors.confirmPassword && <p className="text-red-300 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Register Button */}
              <button
                onClick={handleRegister}
                className="w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean"
              >
                Join the Fleet - Register 🚢
              </button>

              {/* Terms and Conditions */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-ocean-foam text-sm">
                  By registering, you agree to our{' '}
                  <a href="#" className="text-ocean-foam hover:text-sail-white underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-ocean-foam hover:text-sail-white underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Already have an account */}
              <div className="text-center">
                <p className="text-ocean-foam mb-3">Already have an account?</p>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-white/10 text-ocean-foam py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-border"
                >
                  Navigate to Login ⛵
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - 3D Ship Scene */}
        <div className="hidden md:block md:w-1/2 relative">
          <div ref={mountRef} className="w-full h-full" />
          
          {/* Overlay gradient for better integration */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none" />
          
          {/* Floating UI elements */}
          <div className="absolute top-8 right-8 text-sail-white/80">
            <div className="text-right">
              <div className="text-sm font-medium">Current Weather</div>
              <div className="text-xl">⛅ Fair Winds</div>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 text-sail-white/80">
            <div className="text-right">
              <div className="text-sm font-medium">Sea Condition</div>
              <div className="text-xl">🌊 Calm Seas</div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 text-sail-white/80">
            <div className="text-left">
              <div className="text-sm font-medium">Marine Life</div>
              <div className="text-xl">🐬 Dolphins & Fish</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave animation */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-current text-ocean-surface/30"
        >
          <path d="M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z;
                      M0,0V40C240,100,480,20,720,40C960,100,1200,20,1200,40V0Z;
                      M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default CharterPartyRegister;
