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

var FaArrowDown = function (_React$Component) {
    _inherits(FaArrowDown, _React$Component);

    function FaArrowDown() {
        _classCallCheck(this, FaArrowDown);

        return _possibleConstructorReturn(this, (FaArrowDown.__proto__ || Object.getPrototypeOf(FaArrowDown)).apply(this, arguments));
    }

    _createClass(FaArrowDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z' })
                )
            );
        }
    }]);

    return FaArrowDown;
}(React.Component);

exports.default = FaArrowDown;
module.exports = exports['default'];