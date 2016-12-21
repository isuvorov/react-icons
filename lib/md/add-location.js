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

var MdAddLocation = function (_React$Component) {
    _inherits(MdAddLocation, _React$Component);

    function MdAddLocation() {
        _classCallCheck(this, MdAddLocation);

        return _possibleConstructorReturn(this, (MdAddLocation.__proto__ || Object.getPrototypeOf(MdAddLocation)).apply(this, arguments));
    }

    _createClass(MdAddLocation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 16.6v-3.2h-5v-5h-3.2v5h-5v3.2h5v5h3.2v-5h5z m-6.6-13.2c6.4 0 11.6 5.2 11.6 11.6 0 8.8-11.6 21.6-11.6 21.6s-11.6-12.8-11.6-21.6c0-6.4 5.2-11.6 11.6-11.6z' })
                )
            );
        }
    }]);

    return MdAddLocation;
}(React.Component);

exports.default = MdAddLocation;
module.exports = exports['default'];