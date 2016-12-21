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

var FaGlideG = function (_React$Component) {
    _inherits(FaGlideG, _React$Component);

    function FaGlideG() {
        _classCallCheck(this, FaGlideG);

        return _possibleConstructorReturn(this, (FaGlideG.__proto__ || Object.getPrototypeOf(FaGlideG)).apply(this, arguments));
    }

    _createClass(FaGlideG, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.6 6.8q0-0.5 0-0.9t-0.2-0.6-0.5-0.5-0.8-0.2q-0.9 0-1.8 0.5-2.3 1.3-3.5 4.3t-1.2 6q0 1 0.2 1.9t0.6 1.8 1.1 1.4 1.8 0.5q0.1 0 0.4 0t0.5 0 0.3-0.1 0.4-0.1 0.1-0.4q0.4-1.7 1.1-5.2t1.1-5.1q0.4-2.1 0.4-3.3z m16.8 14.7q0 0.1-0.1 0.3t-0.4 0.1l-0.1 0q-0.5-0.1-1.4-0.3t-1.6-0.2-1.4-0.1q-3.7 0-7.8 2-0.4 0.2-0.5 0.6-0.2 0.8-0.6 2.4t-0.5 2.2q-0.5 2.1-1.5 4t-2.5 3.7-3.5 2.8-4.1 1q-3 0-4.8-1.9t-1.8-4.9q0-1.1 0.5-2.6t1.4-2.6 2.1-1.1q0.9 0 2.7 0.7t1.9 1.4q0 0-0.4 0.3t-0.9 0.6-1 1-0.9 1.4-0.3 1.7q0 0.7 0.3 1.1t1.1 0.5q1 0 1.9-0.7t1.5-1.8 1.1-2.3 0.7-2.4 0.4-2v-0.2q0-0.1-0.1-0.1t-0.2 0h-0.2l-0.3 0-0.1 0q-5.1 0-7.8-2.7t-2.8-7.8q0-2.4 0.7-4.9t2.2-4.7 3.5-3.8 4.5-2q1.2-0.2 2.4-0.2 8.3 0 8.3 8.1 0 2.1-0.8 6.1t-1 4.7l0.1 0q2.2-1.2 4.1-1.9t3.7-0.7q0.5 0 1.2 0.3 0.4 0.1 1.8 2.3t1.3 2.6z' })
                )
            );
        }
    }]);

    return FaGlideG;
}(React.Component);

exports.default = FaGlideG;
module.exports = exports['default'];