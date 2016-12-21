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

var FaShip = function (_React$Component) {
    _inherits(FaShip, _React$Component);

    function FaShip() {
        _classCallCheck(this, FaShip);

        return _possibleConstructorReturn(this, (FaShip.__proto__ || Object.getPrototypeOf(FaShip)).apply(this, arguments));
    }

    _createClass(FaShip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.2 32.8q0.3-0.4 0.8-0.4t0.9 0.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-0.3 0.4-0.9 0.4t-0.8-0.4l-1.6-1.6-1.7 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-1.7-1.6-1.6 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-2.5-2.5 1.7-1.7 1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.3-0.4 0.8-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.8 0.4l1.6 1.6z m-30.6-0.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-2.5-2.5 1.7-1.8 1.6 1.6 1.6-1.6q0.4-0.3 0.9-0.3t0.9 0.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-0.4-0.5-0.2-1.1t0.8-0.8l3.4-1.1v-5.8h2.5v-2.5h5v-2.5h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q0.6 0.2 0.8 0.8t-0.1 1.1l-4.1 6.1v5.7l0.4-0.4q0.4-0.3 0.9-0.3t0.8 0.3l1.6 1.6 1.7-1.6q0.3-0.3 0.8-0.3t0.9 0.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-0.3 0.3-0.9 0.3t-0.8-0.3l-1.6-1.7-1.7 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-1.7-1.7-1.6 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7z m7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5v-2.5h-9.9v2.5h-2.5z' })
                )
            );
        }
    }]);

    return FaShip;
}(React.Component);

exports.default = FaShip;
module.exports = exports['default'];