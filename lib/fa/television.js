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

var FaTelevision = function (_React$Component) {
    _inherits(FaTelevision, _React$Component);

    function FaTelevision() {
        _classCallCheck(this, FaTelevision);

        return _possibleConstructorReturn(this, (FaTelevision.__proto__ || Object.getPrototypeOf(FaTelevision)).apply(this, arguments));
    }

    _createClass(FaTelevision, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.2 27.3v-19.9q0-0.3-0.2-0.5t-0.5-0.2h-33.2q-0.2 0-0.4 0.2t-0.2 0.5v19.9q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5z m2.7-19.9v19.9q0 1.4-1 2.4t-2.4 0.9h-15.2v2.7h7.3q0.3 0 0.4 0.2t0.2 0.5v1.3q0 0.3-0.2 0.5t-0.4 0.1h-17.3q-0.3 0-0.5-0.1t-0.2-0.5v-1.3q0-0.3 0.2-0.5t0.5-0.2h7.3v-2.7h-15.3q-1.3 0-2.3-0.9t-1-2.4v-19.9q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z' })
                )
            );
        }
    }]);

    return FaTelevision;
}(React.Component);

exports.default = FaTelevision;
module.exports = exports['default'];