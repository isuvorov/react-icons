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

var FaVolumeUp = function (_React$Component) {
    _inherits(FaVolumeUp, _React$Component);

    function FaVolumeUp() {
        _classCallCheck(this, FaVolumeUp);

        return _possibleConstructorReturn(this, (FaVolumeUp.__proto__ || Object.getPrototypeOf(FaVolumeUp)).apply(this, arguments));
    }

    _createClass(FaVolumeUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.6 7.9v24.2q0 0.6-0.4 1t-1 0.5-1-0.5l-7.4-7.4h-5.9q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h5.9l7.4-7.4q0.4-0.5 1-0.5t1 0.5 0.4 1z m8.6 12.1q0 1.7-0.9 3.2t-2.5 2q-0.3 0.2-0.6 0.2-0.6 0-1-0.5t-0.4-1q0-0.4 0.2-0.8t0.7-0.5 0.7-0.5 0.7-0.8 0.3-1.3-0.3-1.3-0.7-0.8-0.7-0.5-0.7-0.5-0.2-0.8q0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.2 1.5 0.6 2.5 2t0.9 3.2z m5.7 0q0 3.4-1.9 6.3t-5 4.2q-0.3 0.1-0.5 0.1-0.7 0-1.1-0.4t-0.4-1q0-0.9 0.9-1.3 1.2-0.7 1.7-1 1.6-1.2 2.5-3t1-3.9-1-3.9-2.5-3q-0.5-0.3-1.7-1-0.9-0.4-0.9-1.3 0-0.6 0.4-1t1-0.4q0.3 0 0.6 0.1 3.1 1.3 5 4.2t1.9 6.3z m5.7 0q0 5.1-2.8 9.4t-7.5 6.4q-0.3 0.1-0.6 0.1-0.6 0-1-0.5t-0.4-1q0-0.8 0.8-1.3 0.2-0.1 0.5-0.2t0.5-0.2q1.1-0.6 1.9-1.2 2.7-2 4.2-5t1.6-6.5-1.6-6.4-4.2-5.1q-0.8-0.6-1.9-1.2-0.1 0-0.5-0.2t-0.5-0.2q-0.8-0.5-0.8-1.3 0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.1 4.7 2.1 7.5 6.4t2.8 9.4z' })
                )
            );
        }
    }]);

    return FaVolumeUp;
}(React.Component);

exports.default = FaVolumeUp;
module.exports = exports['default'];