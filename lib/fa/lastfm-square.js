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

var FaLastfmSquare = function (_React$Component) {
    _inherits(FaLastfmSquare, _React$Component);

    function FaLastfmSquare() {
        _classCallCheck(this, FaLastfmSquare);

        return _possibleConstructorReturn(this, (FaLastfmSquare.__proto__ || Object.getPrototypeOf(FaLastfmSquare)).apply(this, arguments));
    }

    _createClass(FaLastfmSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 23.5q0-3.9-5.3-5.4-0.7-0.2-1.1-0.3t-0.9-0.6-0.6-1q0-0.1-0.1-0.2t0-0.3-0.1-0.1q0-0.8 0.6-1.4t1.3-0.5q1.2 0 1.6 0.3h0q0.4 0.4 0.9 1.2l2-1.6q-0.8-1.2-1.1-1.4-0.7-0.7-1.5-0.9t-1.9-0.2q-1.8 0-3.1 1.3t-1.4 3q0 0.2 0 0.5 0.4 2.2 1.5 3.2t3.3 1.6q0.6 0.2 1.1 0.3t1 0.5 0.8 0.8 0.3 1v0.1q0.1 1.3-0.9 2.1t-2.2 0.8q-2.2 0-3.7-3.2-0.6-1.1-1.2-2.7t-1.1-2.8-1.2-2.5-1.6-2.1-2.3-1.4-3.3-0.5q-2.3 0-4.3 1.2t-3.2 3.3-1.1 4.3v0q0.1 2.4 1.1 4.5t3 3.3 4.4 1.2q4.1 0 6.2-2.4 0.4-0.6 0.7-1.2l-1.4-2.4q-0.9 1.8-2.2 2.6t-3.2 0.8q-2.6 0-4.3-1.9t-1.7-4.6q0-2.3 1.8-4.2t4.2-1.9q2.5 0 3.8 1.2t2.3 3.8q0.2 0.5 0.6 1.6t0.6 1.7 0.7 1.6 0.9 1.7 1 1.4 1.2 1.2 1.5 0.7 1.8 0.3q2.4 0 4.1-1.5t1.7-3.9z m2.3-14.2v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaLastfmSquare;
}(React.Component);

exports.default = FaLastfmSquare;
module.exports = exports['default'];