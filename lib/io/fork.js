'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoFork = function (_React$Component) {
    _inherits(IoFork, _React$Component);

    function IoFork() {
        _classCallCheck(this, IoFork);

        return _possibleConstructorReturn(this, (IoFork.__proto__ || Object.getPrototypeOf(IoFork)).apply(this, arguments));
    }

    _createClass(IoFork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.1 11.6z m3.9 1.4c0 2-1.2 3.7-2.9 4.5-0.9 0.5-0.8 0.9-0.8 0.9s1.2 15.6 1.2 16.6-0.2 1.4-0.7 1.9-1.2 0.6-1.8 0.6-1.2-0.2-1.7-0.6-0.8-1-0.8-1.9 1.3-16.6 1.3-16.6 0-0.5-0.9-0.9c-1.7-0.8-2.9-2.5-2.9-4.5 0-3.4 1.2-7.3 1.9-10.5h0.6v9.1c0 0.5 0.2 0.9 0.7 0.9s0.7-0.3 0.8-0.8v-0.1l0.7-9.1h0.6l0.8 9.1v0.1c0.1 0.5 0.2 0.8 0.7 0.8s0.7-0.4 0.7-0.9v-9.1h0.6c0.7 3.1 1.9 7.1 1.9 10.5z' })
                )
            );
        }
    }]);

    return IoFork;
}(React.Component);

exports.default = IoFork;
module.exports = exports['default'];