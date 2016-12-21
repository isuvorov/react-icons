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

var FaVenusMars = function (_React$Component) {
    _inherits(FaVenusMars, _React$Component);

    function FaVenusMars() {
        _classCallCheck(this, FaVenusMars);

        return _possibleConstructorReturn(this, (FaVenusMars.__proto__ || Object.getPrototypeOf(FaVenusMars)).apply(this, arguments));
    }

    _createClass(FaVenusMars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33 2.9q0-0.3 0.2-0.5t0.5-0.2h5.7q0.5 0 0.9 0.4t0.3 0.9v5.7q0 0.3-0.1 0.5t-0.5 0.1h-1.3q-0.2 0-0.4-0.1t-0.2-0.5v-2.7l-5 5.1q1.5 1.9 2.1 4.3t0.2 4.9q-0.7 3.5-3.3 6.1t-6.2 3.1q-4.4 0.7-8.1-1.8-2.3 1.6-5.1 1.9v2.6h1.9q0.3 0 0.5 0.2t0.1 0.4v1.3q0 0.3-0.1 0.5t-0.5 0.1h-1.9v1.9q0 0.3-0.2 0.5t-0.4 0.2h-1.3q-0.3 0-0.5-0.2t-0.1-0.5v-1.9h-1.9q-0.3 0-0.5-0.1t-0.2-0.5v-1.3q0-0.2 0.2-0.4t0.5-0.2h1.9v-2.6q-3.1-0.4-5.6-2.2t-3.7-4.7-0.8-6.1q0.5-3.7 3.2-6.4t6.3-3.3q4.5-0.6 8.2 1.8 2.9-1.9 6.3-1.9 4 0 7.1 2.5l5.1-5h-2.7q-0.2 0-0.4-0.2t-0.2-0.5v-1.2z m-15.2 22q2.5-2.6 2.5-6.2t-2.5-6.2q-2.6 2.6-2.6 6.2t2.6 6.2z m-15.3-6.2q0 3.7 2.6 6.3t6.3 2.6q2.4 0 4.4-1.1-3.1-3.3-3.1-7.8t3.1-7.7q-2-1.2-4.4-1.2-3.6 0-6.3 2.6t-2.6 6.3z m21.6 8.9q3.7 0 6.3-2.6t2.6-6.3-2.6-6.2-6.3-2.7q-2.3 0-4.3 1.2 3.1 3.3 3.1 7.7t-3.1 7.8q2 1.1 4.3 1.1z' })
                )
            );
        }
    }]);

    return FaVenusMars;
}(React.Component);

exports.default = FaVenusMars;
module.exports = exports['default'];