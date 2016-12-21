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

var FaPaintBrush = function (_React$Component) {
    _inherits(FaPaintBrush, _React$Component);

    function FaPaintBrush() {
        _classCallCheck(this, FaPaintBrush);

        return _possibleConstructorReturn(this, (FaPaintBrush.__proto__ || Object.getPrototypeOf(FaPaintBrush)).apply(this, arguments));
    }

    _createClass(FaPaintBrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36 0q1.6 0 2.8 1t1.2 2.6q0 1.4-1 3.4-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8l14.2-12.9q1.4-1.2 2.9-1.2z m-20.2 23.1q0.8 1.7 2.3 2.9t3.4 1.7l0 1.6q0.1 4.7-2.9 7.7t-7.8 3q-2.7 0-4.8-1t-3.4-2.9-2-4.1-0.6-4.9q0.2 0.1 0.9 0.7t1.4 1 1.3 0.8 1 0.4q1 0 1.3-0.8 0.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-0.6 2.8-0.2z' })
                )
            );
        }
    }]);

    return FaPaintBrush;
}(React.Component);

exports.default = FaPaintBrush;
module.exports = exports['default'];