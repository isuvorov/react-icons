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

var FaAudioDescription = function (_React$Component) {
    _inherits(FaAudioDescription, _React$Component);

    function FaAudioDescription() {
        _classCallCheck(this, FaAudioDescription);

        return _possibleConstructorReturn(this, (FaAudioDescription.__proto__ || Object.getPrototypeOf(FaAudioDescription)).apply(this, arguments));
    }

    _createClass(FaAudioDescription, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.8 21.7h3l0-4.6z m18-1.7q0-1.5-0.9-2.5t-2.6-0.9h-0.9v6.8h0.9q1.6 0 2.5-1t1-2.4z m-10.1-6.6l0.1 13.2q0 0.3-0.2 0.4t-0.4 0.2h-3.8q-0.3 0-0.4-0.2t-0.2-0.4v-1.1h-5.1l-0.9 1.5q-0.2 0.2-0.5 0.2h-4.7q-0.4 0-0.5-0.3t0-0.6l9.8-13.3q0.1-0.2 0.4-0.2h5.8q0.3 0 0.5 0.2t0.1 0.4z m14.5 6.6q0 3.4-2.2 5.3t-5.7 1.9h-4.7q-0.2 0-0.4-0.2t-0.2-0.4v-13.2q0-0.3 0.2-0.4t0.4-0.2h4.7q3.5 0 5.7 1.9t2.2 5.3z m2.7 0q0 0.2 0 0.5t-0.1 1.3-0.4 1.7-0.8 1.9-1.2 1.8h-0.9q0.6-0.8 1.1-1.8t0.8-2 0.3-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.1-1.1-0.4-1.6-0.7-1.9-1.2-2.2h0.8q0.7 0.8 1.2 1.9t0.8 1.9 0.4 1.7 0.2 1.2z m3.3 0q0 0.2 0 0.5t-0.2 1.3-0.4 1.7-0.7 1.9-1.3 1.8h-0.9q0.6-0.8 1.1-1.8t0.8-2 0.3-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.1-1.1-0.4-1.6-0.7-1.9-1.1-2.2h0.7q0.7 0.8 1.3 1.9t0.8 1.9 0.4 1.7 0.1 1.2z m3.1 0q0 0.2 0 0.5t-0.1 1.3-0.4 1.7-0.8 1.9-1.3 1.8h-0.8q0.6-0.8 1.1-1.8t0.7-2 0.4-1.7 0.2-1.2l0-0.5q0-0.2 0-0.4t-0.2-1.1-0.3-1.6-0.7-1.9-1.2-2.2h0.8q0.7 0.8 1.2 1.9t0.8 1.9 0.4 1.7 0.2 1.2z' })
                )
            );
        }
    }]);

    return FaAudioDescription;
}(React.Component);

exports.default = FaAudioDescription;
module.exports = exports['default'];