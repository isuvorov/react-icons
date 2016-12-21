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

var FaPlane = function (_React$Component) {
    _inherits(FaPlane, _React$Component);

    function FaPlane() {
        _classCallCheck(this, FaPlane);

        return _possibleConstructorReturn(this, (FaPlane.__proto__ || Object.getPrototypeOf(FaPlane)).apply(this, arguments));
    }

    _createClass(FaPlane, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.7 3.6q1 1.1 0.3 3.3t-2.4 3.8l-3.6 3.6 3.5 15.5q0.2 0.5-0.2 0.8l-2.9 2.1q-0.1 0.2-0.4 0.2-0.1 0-0.2-0.1-0.3 0-0.4-0.3l-6.3-11.4-5.7 5.8 1.1 4.4q0.2 0.3-0.1 0.6l-2.2 2.2q-0.2 0.2-0.5 0.2h0q-0.4-0.1-0.6-0.3l-4.2-5.6-5.6-4.2q-0.3-0.2-0.3-0.6 0-0.2 0.2-0.5l2.1-2.2q0.2-0.2 0.6-0.2 0.1 0 0.1 0l4.4 1.2 5.7-5.8-11.3-6.2q-0.3-0.2-0.4-0.5 0-0.4 0.2-0.6l2.9-2.9q0.3-0.3 0.7-0.2l14.8 3.6 3.6-3.6q1.7-1.7 3.8-2.4t3.3 0.3z' })
                )
            );
        }
    }]);

    return FaPlane;
}(React.Component);

exports.default = FaPlane;
module.exports = exports['default'];