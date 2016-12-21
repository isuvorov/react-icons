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

var FaShareSquare = function (_React$Component) {
    _inherits(FaShareSquare, _React$Component);

    function FaShareSquare() {
        _classCallCheck(this, FaShareSquare);

        return _possibleConstructorReturn(this, (FaShareSquare.__proto__ || Object.getPrototypeOf(FaShareSquare)).apply(this, arguments));
    }

    _createClass(FaShareSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.4 24.6l7.9-7.9q0.4-0.4 0.4-1t-0.4-1l-7.9-7.8q-0.6-0.7-1.5-0.4-0.9 0.4-0.9 1.4v3.5q-2.7 0-4.8 0.5t-3.6 1.1-2.6 1.8-1.7 2.1-1 2.4-0.5 2.5-0.1 2.5q0 4 3.7 9 0.3 0.3 0.6 0.3 0.2 0 0.3-0.1 0.5-0.2 0.4-0.7-1-7.9 1.4-10.6 1-1.1 2.9-1.7t5-0.5v3.6q0 0.9 0.9 1.3 0.3 0.1 0.5 0.1 0.6 0 1-0.4z m11.9-15.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaShareSquare;
}(React.Component);

exports.default = FaShareSquare;
module.exports = exports['default'];