import React, { Component } from 'react';

class SnakeGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: 10,
      canvasSize: 300,
      snake: [{ x: 10, y: 10 }],
      apple: { x: 5, y: 5 },
      dx: 0,
      dy: 0,
      gameInterval: null,
      gameRunning: false,
    };

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.startGame();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    clearInterval(this.state.gameInterval);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  drawSnake = () => {
    const ctx = this.canvasRef.current.getContext('2d');
    this.state.snake.forEach((segment) => {
      ctx.fillStyle = 'green';
      ctx.fillRect(
        segment.x * this.state.gridSize,
        segment.y * this.state.gridSize,
        this.state.gridSize,
        this.state.gridSize
      );
    });
  };

  drawApple = () => {
    const ctx = this.canvasRef.current.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(
      this.state.apple.x * this.state.gridSize,
      this.state.apple.y * this.state.gridSize,
      this.state.gridSize,
      this.state.gridSize
    );
  };

  update = () => {
    const head = { x: this.state.snake[0].x + this.state.dx, y: this.state.snake[0].y + this.state.dy };

    if (head.x === this.state.apple.x && head.y === this.state.apple.y) {
      const newSnake = [...this.state.snake];
      newSnake.unshift(this.state.apple);
      const newApple = {
        x: Math.floor(Math.random() * (this.state.canvasSize / this.state.gridSize)),
        y: Math.floor(Math.random() * (this.state.canvasSize / this.state.gridSize)),
      };
      this.setState({ snake: newSnake, apple: newApple });
    } else {
      const newSnake = [...this.state.snake];
      newSnake.pop();
      newSnake.unshift(head);
      this.setState({ snake: newSnake });
    }
  };

  clearCanvas = () => {
    const ctx = this.canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, this.state.canvasSize, this.state.canvasSize);
    // Add grid lines
    for (let x = 0; x < this.state.canvasSize; x += this.state.gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.state.canvasSize);
    }
    for (let y = 0; y < this.state.canvasSize; y += this.state.gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.state.canvasSize, y);
    }
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
  };

  gameOver = () => {
    clearInterval(this.state.gameInterval);
    alert('Game Over!');
    this.resetGame();
  };

  draw = () => {
    this.clearCanvas();
    this.drawSnake();
    this.drawApple();
    this.update();

    if (
      this.state.snake[0].x < 0 ||
      this.state.snake[0].x >= this.state.canvasSize / this.state.gridSize ||
      this.state.snake[0].y < 0 ||
      this.state.snake[0].y >= this.state.canvasSize / this.state.gridSize
    ) {
      this.gameOver();
    }

    for (let i = 1; i < this.state.snake.length; i++) {
      if (
        this.state.snake[i].x === this.state.snake[0].x &&
        this.state.snake[i].y === this.state.snake[0].y
      ) {
        this.gameOver();
      }
    }
  };

  startGame = () => {
    if (!this.state.gameRunning) {
      this.setState({ gameRunning: true });
      this.setState({ gameInterval: setInterval(this.draw, 100) });
      this.setState({ dx: 0, dy: 0 });
      this.setState({ snake: [{ x: 10, y: 10 }] });
      this.setState({ apple: { x: 5, y: 5 } });
    }
  };

  resetGame = () => {
    clearInterval(this.state.gameInterval);
    this.setState({ gameRunning: false });
    this.setState({ snake: [{ x: 10, y: 10 }] });
    this.setState({ dx: 0, dy: 0 });
    this.setState({ apple: { x: 5, y: 5 } });
    this.clearCanvas();
  };

  handleKeyDown = (event) => {
    if (!this.state.gameRunning) return;
    switch (event.key) {
      case 'ArrowUp':
        if (this.state.dy === 1) return;
        this.setState({ dx: 0, dy: -1 });
        break;
      case 'ArrowDown':
        if (this.state.dy === -1) return;
        this.setState({ dx: 0, dy: 1 });
        break;
      case 'ArrowLeft':
        if (this.state.dx === 1) return;
        this.setState({ dx: -1, dy: 0 });
        break;
      case 'ArrowRight':
        if (this.state.dx === -1) return;
        this.setState({ dx: 1, dy: 0 });
        break;
    }
  };

  render() {
    return (
      <div className=' min-h-screen flex flex-col gap-4 items-center'>
        <button onClick={this.startGame} disabled={this.state.gameRunning}>
          Start Game
        </button>
        <div id="game-container" style={{ display: 'block' }}>
          <canvas
            ref={this.canvasRef}
            id="game-board"
            width={this.state.canvasSize}
            height={this.state.canvasSize}
          ></canvas>
        </div>
      </div>
    );
  }
}

export default SnakeGame
