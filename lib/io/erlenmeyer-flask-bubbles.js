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

var IoErlenmeyerFlaskBubbles = function (_React$Component) {
    _inherits(IoErlenmeyerFlaskBubbles, _React$Component);

    function IoErlenmeyerFlaskBubbles() {
        _classCallCheck(this, IoErlenmeyerFlaskBubbles);

        return _possibleConstructorReturn(this, (IoErlenmeyerFlaskBubbles.__proto__ || Object.getPrototypeOf(IoErlenmeyerFlaskBubbles)).apply(this, arguments));
    }

    _createClass(IoErlenmeyerFlaskBubbles, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.8 33.4c0.2 0.3 0.3 0.7 0 1.1s-0.6 0.5-1 0.5h-27.7c-0.4 0-0.7-0.2-0.9-0.5s-0.2-0.8 0-1.1l9.2-15.6v-11.7c0-0.6 0.4-1.1 1.1-1.1s1.1 0.5 1.1 1.1v6.2c0.4-0.2 0.8-0.3 1.3-0.3 1.2 0 2.1 0.9 2.1 2.1s-0.9 2-2.1 2c-0.5 0-0.9-0.2-1.3-0.4v2.4c0 0.2 0 0.3-0.1 0.5l-2.8 4.6h5.7c-1.2-0.5-2.1-1.6-2.1-2.9 0-1.8 1.5-3.3 3.4-3.3 1.2 0 2.1 0.7 2.7 1.5 0-0.1 0-0.2 0-0.4v-12c0-0.6 0.4-1.1 1.1-1.1s1.1 0.5 1.1 1.1v11.7z m-12.8-10.2h4.2l-2.4-4.2c0.1 0.4 0.2 0.8 0.2 1.3 0 1.3-0.8 2.4-2 2.9z m-1.3-13.1c-0.9 0-1.7-0.7-1.7-1.7s0.8-1.6 1.7-1.6 1.7 0.7 1.7 1.6-0.8 1.7-1.7 1.7z' })
                )
            );
        }
    }]);

    return IoErlenmeyerFlaskBubbles;
}(React.Component);

exports.default = IoErlenmeyerFlaskBubbles;
module.exports = exports['default'];