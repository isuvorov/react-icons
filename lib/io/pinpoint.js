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

var IoPinpoint = function (_React$Component) {
    _inherits(IoPinpoint, _React$Component);

    function IoPinpoint() {
        _classCallCheck(this, IoPinpoint);

        return _possibleConstructorReturn(this, (IoPinpoint.__proto__ || Object.getPrototypeOf(IoPinpoint)).apply(this, arguments));
    }

    _createClass(IoPinpoint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.6 28.1c2.5-2.5 4-5.8 4.3-9.3l-4.9-0.7v-1.2l4.9-0.6c-0.3-3.6-1.8-6.9-4.3-9.4s-5.8-4-9.4-4.3l-0.6 4.9h-1.2l-0.6-4.9c-3.6 0.3-6.9 1.8-9.4 4.3s-4 5.8-4.3 9.4l4.9 0.6v1.2l-4.9 0.7c0.3 3.5 1.8 6.8 4.3 9.3s5.8 4 9.4 4.3l0.6-4.9h1.2l0.7 4.9c3.5-0.3 6.8-1.8 9.3-4.3z' })
                )
            );
        }
    }]);

    return IoPinpoint;
}(React.Component);

exports.default = IoPinpoint;
module.exports = exports['default'];