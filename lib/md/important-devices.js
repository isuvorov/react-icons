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

var MdImportantDevices = function (_React$Component) {
    _inherits(MdImportantDevices, _React$Component);

    function MdImportantDevices() {
        _classCallCheck(this, MdImportantDevices);

        return _possibleConstructorReturn(this, (MdImportantDevices.__proto__ || Object.getPrototypeOf(MdImportantDevices)).apply(this, arguments));
    }

    _createClass(MdImportantDevices, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.9 15h5.1l-4.1 3 1.5 4.8-4-3-4.2 3 1.6-4.8-4.2-3h5.1l1.7-5z m13.5-11.6c1.8 0 3.2 1.4 3.2 3.2v8.4h-3.2v-8.4h-30v20h21.6v3.4h-3.4v3.4h3.4v3.2h-13.4v-3.2h3.4v-3.4h-11.6c-1.9 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.5-3.2 3.4-3.2h30z m5 30v-11.8h-8.4v11.8h8.4z m0-15c0.9 0 1.6 0.7 1.6 1.6v15c0 0.9-0.7 1.6-1.6 1.6h-8.4c-0.9 0-1.6-0.7-1.6-1.6v-15c0-0.9 0.7-1.6 1.6-1.6h8.4z' })
                )
            );
        }
    }]);

    return MdImportantDevices;
}(React.Component);

exports.default = MdImportantDevices;
module.exports = exports['default'];