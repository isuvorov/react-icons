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

var IoCodeWorking = function (_React$Component) {
    _inherits(IoCodeWorking, _React$Component);

    function IoCodeWorking() {
        _classCallCheck(this, IoCodeWorking);

        return _possibleConstructorReturn(this, (IoCodeWorking.__proto__ || Object.getPrototypeOf(IoCodeWorking)).apply(this, arguments));
    }

    _createClass(IoCodeWorking, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 20c0-1.2 0.6-1.9 1.9-1.9s1.9 0.7 1.9 1.9-0.7 1.9-1.9 1.9-1.9-0.6-1.9-1.9z m5.6 0c0-1.2 0.7-1.9 1.9-1.9s1.9 0.7 1.9 1.9-0.6 1.9-1.9 1.9-1.9-0.6-1.9-1.9z m5.7 0c0-1.2 0.6-1.9 1.8-1.9s1.9 0.7 1.9 1.9-0.6 1.9-1.9 1.9-1.8-0.6-1.8-1.9z m-10.7 10.6c-0.5 0-0.9-0.1-1.3-0.5l-8.8-8.8c-0.3-0.4-0.5-0.8-0.5-1.3s0.2-0.9 0.5-1.3l8.8-8.8c0.4-0.4 0.8-0.5 1.3-0.5s1 0.1 1.4 0.5 0.5 0.8 0.5 1.4-0.2 0.9-0.5 1.3l-7.5 7.4 7.5 7.4c0.3 0.4 0.5 0.8 0.5 1.4s-0.2 0.9-0.5 1.3-0.8 0.5-1.4 0.5z m13.8 0c-0.6 0-1-0.1-1.4-0.5s-0.5-0.8-0.5-1.3 0.2-1 0.5-1.4l7.5-7.4-7.5-7.4c-0.3-0.4-0.5-0.8-0.5-1.3s0.2-1 0.5-1.4 0.8-0.5 1.4-0.5 0.9 0.1 1.3 0.5l8.8 8.8c0.3 0.4 0.5 0.8 0.5 1.3s-0.2 0.9-0.5 1.3l-8.8 8.8c-0.4 0.4-0.8 0.5-1.3 0.5z' })
                )
            );
        }
    }]);

    return IoCodeWorking;
}(React.Component);

exports.default = IoCodeWorking;
module.exports = exports['default'];