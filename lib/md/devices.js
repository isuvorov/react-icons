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

var MdDevices = function (_React$Component) {
    _inherits(MdDevices, _React$Component);

    function MdDevices() {
        _classCallCheck(this, MdDevices);

        return _possibleConstructorReturn(this, (MdDevices.__proto__ || Object.getPrototypeOf(MdDevices)).apply(this, arguments));
    }

    _createClass(MdDevices, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.6 28.4v-11.8h-6.6v11.8h6.6z m1.8-15q0.7 0 1.1 0.4t0.5 1.2v16.6q0 0.7-0.5 1.3t-1.1 0.5h-10q-0.7 0-1.3-0.5t-0.5-1.3v-16.6q0-0.7 0.5-1.2t1.3-0.4h10z m-31.8-3.4v18.4h16.8v5h-23.4v-5h3.4v-18.4q0-1.3 0.9-2.3t2.3-1.1h30v3.4h-30z' })
                )
            );
        }
    }]);

    return MdDevices;
}(React.Component);

exports.default = MdDevices;
module.exports = exports['default'];