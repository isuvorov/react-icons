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

var FaMarsStroke = function (_React$Component) {
    _inherits(FaMarsStroke, _React$Component);

    function FaMarsStroke() {
        _classCallCheck(this, FaMarsStroke);

        return _possibleConstructorReturn(this, (FaMarsStroke.__proto__ || Object.getPrototypeOf(FaMarsStroke)).apply(this, arguments));
    }

    _createClass(FaMarsStroke, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 2.9q0.5 0 1 0.4t0.4 1v9.3q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5.9l-4.7 4.8 3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-3.2-3.2-1.7 1.8q2.8 3.5 2.8 8 0 2.6-1 5t-2.7 4.1-4.2 2.7-4.9 1-5-1-4.1-2.7-2.8-4.1-1-5 1-5 2.8-4.1 4.1-2.8 5-1q4.5 0 8 2.8l1.7-1.7-3.8-3.8q-0.2-0.3-0.2-0.6t0.2-0.4l1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l3.8 3.9 4.8-4.8h-5.8q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h9.3z m-20 31.4q4.1 0 7-2.9t3-7.1-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z' })
                )
            );
        }
    }]);

    return FaMarsStroke;
}(React.Component);

exports.default = FaMarsStroke;
module.exports = exports['default'];