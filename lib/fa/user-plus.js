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

var FaUserPlus = function (_React$Component) {
    _inherits(FaUserPlus, _React$Component);

    function FaUserPlus() {
        _classCallCheck(this, FaUserPlus);

        return _possibleConstructorReturn(this, (FaUserPlus.__proto__ || Object.getPrototypeOf(FaUserPlus)).apply(this, arguments));
    }

    _createClass(FaUserPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2z m18.6 2.5h6.8q0.3 0 0.5 0.2t0.2 0.4v3.7q0 0.3-0.2 0.5t-0.5 0.2h-6.8v6.8q0 0.2-0.2 0.4t-0.4 0.2h-3.7q-0.3 0-0.5-0.2t-0.2-0.4v-6.8h-6.8q-0.3 0-0.4-0.2t-0.2-0.5v-3.7q0-0.2 0.2-0.4t0.4-0.2h6.8v-6.8q0-0.3 0.2-0.5t0.4-0.2h3.8q0.2 0 0.4 0.2t0.2 0.5v6.8z m-14.3 4.3q0 1 0.7 1.8t1.8 0.7h5v4.6q-1.4 1-3.4 1h-16.9q-2.4 0-3.8-1.3t-1.4-3.7q0-1 0.1-2t0.2-2.1 0.6-2.2 0.8-1.8 1.2-1.6 1.7-1.1 2.1-0.3q0.4 0 0.8 0.3 1.5 1.2 3 1.8t3.2 0.6 3.2-0.6 3-1.8q0.3-0.3 0.7-0.3 2.6 0 4.2 1.8h-4.3q-1 0-1.7 0.8t-0.8 1.7v3.7z' })
                )
            );
        }
    }]);

    return FaUserPlus;
}(React.Component);

exports.default = FaUserPlus;
module.exports = exports['default'];