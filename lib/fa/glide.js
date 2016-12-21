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

var FaGlide = function (_React$Component) {
    _inherits(FaGlide, _React$Component);

    function FaGlide() {
        _classCallCheck(this, FaGlide);

        return _possibleConstructorReturn(this, (FaGlide.__proto__ || Object.getPrototypeOf(FaGlide)).apply(this, arguments));
    }

    _createClass(FaGlide, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.3 11.5q0 0.6-0.3 2.1-0.2 1.1-0.7 3.3t-0.6 3.4q-0.1 0.2-0.1 0.3t-0.3 0q-0.5 0.1-0.7 0.1-1.3 0-1.9-1.1t-0.6-2.6q0-1.9 0.8-3.9t2.3-2.7q0.6-0.3 1.1-0.3 0.7 0 0.8 0.3t0.2 1.1z m10.9 9.5q0-0.4-0.9-1.7t-1.2-1.5q-0.4-0.2-0.7-0.2-2 0-5.1 1.7l0 0q0.1-0.5 0.6-3t0.6-4q0-5.2-5.4-5.2-0.6 0-1.6 0.1-2.1 0.4-3.7 2t-2.5 3.8-0.8 4.2q0 3.2 1.8 5t5 1.8q0.6 0 0.6 0t0 0.1q-0.1 0.8-0.6 2.6-0.3 1.2-1.2 2.3t-1.8 1.1q-0.9 0-0.9-1.1 0-0.5 0.2-1t0.6-0.9 0.6-0.6 0.6-0.5 0.2-0.2q0 0-0.1-0.2-0.6-0.5-1.3-0.8t-1.5-0.3q-0.8 0-1.4 0.7t-0.9 1.7-0.3 1.7q0 1.9 1.2 3.1t3 1.2q1.9 0 3.5-1.1t2.6-2.8 1.5-3.5q0.1-0.5 0.3-1.4t0.4-1.5q0-0.3 0.3-0.4 2.6-1.4 5-1.4 1.1 0 2.9 0.4 0 0.1 0.1 0.1 0.1 0 0.2-0.1t0.1-0.2z m4.1-11.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaGlide;
}(React.Component);

exports.default = FaGlide;
module.exports = exports['default'];