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

var MdViewDay = function (_React$Component) {
    _inherits(MdViewDay, _React$Component);

    function MdViewDay() {
        _classCallCheck(this, MdViewDay);

        return _possibleConstructorReturn(this, (MdViewDay.__proto__ || Object.getPrototypeOf(MdViewDay)).apply(this, arguments));
    }

    _createClass(MdViewDay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.4 5h31.6v5h-31.6v-5z m30 8.4c0.9 0 1.6 0.7 1.6 1.6v10c0 0.9-0.7 1.6-1.6 1.6h-28.4c-0.9 0-1.6-0.7-1.6-1.6v-10c0-0.9 0.7-1.6 1.6-1.6h28.4z m-30 21.6v-5h31.6v5h-31.6z' })
                )
            );
        }
    }]);

    return MdViewDay;
}(React.Component);

exports.default = MdViewDay;
module.exports = exports['default'];