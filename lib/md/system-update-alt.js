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

var MdSystemUpdateAlt = function (_React$Component) {
    _inherits(MdSystemUpdateAlt, _React$Component);

    function MdSystemUpdateAlt() {
        _classCallCheck(this, MdSystemUpdateAlt);

        return _possibleConstructorReturn(this, (MdSystemUpdateAlt.__proto__ || Object.getPrototypeOf(MdSystemUpdateAlt)).apply(this, arguments));
    }

    _createClass(MdSystemUpdateAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 5.9q1.3 0 2.3 0.9t1.1 2.3v23.4q0 1.3-1.1 2.3t-2.3 1.1h-30q-1.3 0-2.3-1.1t-1.1-2.3v-23.4q0-1.3 1.1-2.3t2.3-0.9h10v3.2h-10v23.4h30v-23.4h-10v-3.2h10z m-15 21.6l-6.6-6.6h5v-15h3.2v15h5z' })
                )
            );
        }
    }]);

    return MdSystemUpdateAlt;
}(React.Component);

exports.default = MdSystemUpdateAlt;
module.exports = exports['default'];