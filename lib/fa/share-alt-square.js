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

var FaShareAltSquare = function (_React$Component) {
    _inherits(FaShareAltSquare, _React$Component);

    function FaShareAltSquare() {
        _classCallCheck(this, FaShareAltSquare);

        return _possibleConstructorReturn(this, (FaShareAltSquare.__proto__ || Object.getPrototypeOf(FaShareAltSquare)).apply(this, arguments));
    }

    _createClass(FaShareAltSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 26.7q0-2-1.4-3.4t-3.4-1.4q-1.9 0-3.2 1.3l-5.4-2.7q0-0.3 0-0.5t0-0.5l5.4-2.7q1.3 1.3 3.2 1.3 2 0 3.4-1.4t1.4-3.4-1.4-3.3-3.4-1.4-3.4 1.4-1.4 3.3q0 0.2 0.1 0.5l-5.4 2.7q-1.4-1.3-3.2-1.3-2 0-3.4 1.4t-1.4 3.4 1.4 3.4 3.4 1.4q1.8 0 3.2-1.3l5.4 2.7q-0.1 0.3-0.1 0.5 0 1.9 1.4 3.3t3.4 1.4 3.4-1.4 1.4-3.3z m5.7-17.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaShareAltSquare;
}(React.Component);

exports.default = FaShareAltSquare;
module.exports = exports['default'];