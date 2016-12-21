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

var MdSignalCellularNoSim = function (_React$Component) {
    _inherits(MdSignalCellularNoSim, _React$Component);

    function MdSignalCellularNoSim() {
        _classCallCheck(this, MdSignalCellularNoSim);

        return _possibleConstructorReturn(this, (MdSignalCellularNoSim.__proto__ || Object.getPrototypeOf(MdSignalCellularNoSim)).apply(this, arguments));
    }

    _createClass(MdSignalCellularNoSim, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.1 6.5l29.1 29-2.2 2.2-3.1-3.2q-0.9 0.5-1.5 0.5h-16.8q-1.3 0-2.3-1t-0.9-2.4v-18.6l-4.4-4.4z m25.5 1.9v19.4l-18.9-18.9 3.9-3.9h11.8q1.3 0 2.3 1t0.9 2.4z' })
                )
            );
        }
    }]);

    return MdSignalCellularNoSim;
}(React.Component);

exports.default = MdSignalCellularNoSim;
module.exports = exports['default'];